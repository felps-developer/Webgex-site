<?php
/**
 * Cloud Function - proxy de envio de e-mail via xMailer (endpoint de maturidade).
 *
 * VERSÃO CORRIGIDA / ENRIJECIDA DE SEGURANÇA.
 *
 * Correções em relação à versão anterior:
 *  - senha SMTP NÃO fica mais no código (vem de variável de ambiente SMTP_SENHA);
 *  - CORS restrito ao(s) domínio(s) do site (antes era '*', o que permitia uso
 *    como spam relay por qualquer site/script);
 *  - adiciona rate limiting por IP (evita abuso/envio em massa);
 *  - valida e-mail e rejeita conteúdo malicioso (XSS/HTML a partir de entrada);
 *  - aceita subject/bcc vindos do request (fallback p/ padrão de maturidade);
 *  - retorna status HTTP corretos e não vaza detalhes internos no erro.
 *
 * REQUISITOS:
 *  - Definir no servidor as variáveis de ambiente:
 *      SMTP_USUARIO   (ex.: smtp@webgex.com.br)
 *      SMTP_SENHA     (senha SMTP - NÃO colocar no código/git)
 *  - Ajustar ALLOWED_ORIGINS para o(s) domínio(s) real(is) do site.
 */

// ------------------------------------------------------------------
// Configuração
// ------------------------------------------------------------------

// Carrega helpers de validação/segurança (validEmail, isMalicious, escapeHtml,
// cleanPhone, rateLimitAllow).
require_once __DIR__ . '/security.php';

// Origem permitida (navegador). Restrinja ao(s) domínio(s) do site.
$ALLOWED_ORIGINS = ['https://webgex.com.br', 'https://www.webgex.com.br'];

// Credenciais via ambiente (nada de segredo no código).
$SMTP_HOST   = 'smtp3.xmailer.com.br';
$SMTP_USER   = getenv('SMTP_USUARIO') ?: 'smtp@webgex.com.br'; // senha separada
$SMTP_PASS   = getenv('SMTP_SENHA');    // obrigatório
$SMTP_FROM   = 'no-reply@unigex.com.br';
$SMTP_FROM_NAME = 'UNIGEX - Diagnóstico de Maturidade';
$SMTP_REPLY  = 'no-reply@unigex.com.br';
$XMAILER_API = 'https://api.xmailer.com.br/sendmail/';
$BCC_PADRAO  = 'mmiranda@unigex.com.br'; // usado se o request não enviar bcc

// Rate limit (tentativas por IP por janela).
$RATE_LIMIT_MAX  = 8;                 // máximo por janela
$RATE_LIMIT_WIND = 600;               // 10 min em segundos
$RATE_LIMIT_DIR  = sys_get_temp_dir() . '/webgex_ratelimit';

// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------

/** CORS restrito à origem permitida. */
function corsHeaders() {
    global $ALLOWED_ORIGINS;
    $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
    if ($origin !== '' && in_array($origin, $ALLOWED_ORIGINS, true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
    }
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}

/** IP real do cliente (atrás de proxy/balanceador). */
function clientIp() {
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $parts = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        return trim($parts[0]);
    }
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

/** Resposta JSON. */
function respond($code, $data) {
    http_response_code($code);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}

// ------------------------------------------------------------------
// Fluxo da requisição
// ------------------------------------------------------------------

corsHeaders();

// Pré-verificação CORS.
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Apenas POST.
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['success' => false, 'error' => 'Método não permitido.']);
}

// Credencial SMTP obrigatória a partir do ambiente.
if ($SMTP_PASS === '' || $SMTP_PASS === false) {
    error_log('SMTP_SENHA não definida no ambiente.');
    respond(500, ['success' => false, 'error' => 'Erro de configuração do servidor.']);
}

// Rate limit por IP.
$ip = clientIp();
if (!rateLimitAllow($ip, $RATE_LIMIT_MAX, $RATE_LIMIT_WIND, $RATE_LIMIT_DIR)) {
    respond(429, ['success' => false, 'error' => 'Muitas tentativas. Tente novamente mais tarde.']);
}

// Entrada.
$prospectEmail = isset($_POST['email']) ? trim($_POST['email']) : '';
$prospectPhone = isset($_POST['phone']) ? trim((string)$_POST['phone']) : '';
$submittedSubject = isset($_POST['subject']) && trim($_POST['subject']) !== ''
    ? trim($_POST['subject'])
    : 'Seu Diagnóstico de Maturidade de Gestão - UNIGEX';
$bccEmail = isset($_POST['bcc']) && trim($_POST['bcc']) !== ''
    ? trim($_POST['bcc'])
    : $BCC_PADRAO;

// Normaliza o corpo da mensagem definindo o limite real.
$messageBody = isset($_POST['message']) ? (string)$_POST['message'] : '';
$messageBody = mb_substr($messageBody, 0, 50000);

// Validações obrigatórias.
if ($prospectEmail === '' || $messageBody === '') {
    respond(400, ['success' => false, 'error' => 'Dados do formulário ausentes.']);
}
if (!validEmail($prospectEmail)) {
    respond(400, ['success' => false, 'error' => 'E-mail de destino inválido.']);
}
if ($bccEmail !== '' && !validEmail($bccEmail)) {
    respond(400, ['success' => false, 'error' => 'E-mail BCC inválido.']);
}

// Rejeita conteúdo malicioso em qualquer campo livre.
if (isMalicious($prospectEmail) || isMalicious($messageBody) || isMalicious($submittedSubject)) {
    error_log("[webgex-email] Conteúdo malicioso rejeitado do IP $ip");
    respond(400, ['success' => false, 'error' => 'Conteúdo inválido.']);
}

// Monta o payload para a API do xMailer.
$payload = [
    'host_smtp'        => $SMTP_HOST,
    'usuario_smtp'     => $SMTP_USER,
    'senha_smtp'       => $SMTP_PASS,
    'emailRemetente'   => $SMTP_FROM,
    'nomeRemetente'    => $SMTP_FROM_NAME,
    'emailReply'       => $SMTP_REPLY,
    'emailDestino'     => [$prospectEmail],
    'emailDestinoCopiaOculta' => $bccEmail !== '' ? [$bccEmail] : [],
    'assunto'          => mb_substr($submittedSubject, 0, 160),
    'mensagem'         => $messageBody, // HTML proveniente do site (montado com escape no cliente)
    'mensagemTipo'     => 'html',
];

$jsonData = json_encode($payload);

// Envia para a API do xMailer.
$ch = curl_init($XMAILER_API);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Content-Length: ' . strlen($jsonData),
]);
curl_setopt($ch, CURLOPT_TIMEOUT, 15);

$response = curl_exec($ch);
$http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curl_err = curl_error($ch);
curl_close($ch);

if ($response === false) {
    error_log("Erro curl xMailer: $curl_err");
    respond(502, ['success' => false, 'error' => 'Falha ao enviar o e-mail.']);
}
$responseData = json_decode($response, true);
if ($http_status === 200 && isset($responseData[0]['codigo']) && $responseData[0]['codigo'] == '200') {
    echo 'OK';
    exit;
}

error_log("xMailer status $http_status: $response");
respond(502, ['success' => false, 'error' => 'Falha ao enviar o e-mail.']);
