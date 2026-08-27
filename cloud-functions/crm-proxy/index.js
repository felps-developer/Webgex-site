// Cloud Function - proxy de recebimento de leads e envio para a API Webgex.
//
// VERSÃO CORRIGIDA / ENDURECIDA DE SEGURANÇA.
// Substitui a versão anterior que:
//   - tinha a chave da API hardcoded no código (agora vem de variável de ambiente);
//   - não validava/sanitizava a entrada (permitia XSS e payloads malformados);
//   - permitia CORS aberto (*);
//   - retornava HTTP 200 mesmo em erro;
//   - não tinha limite de frequência (rate limiting).
//
// REQUISITOS:
//   - Definir no Cloud Run / Cloud Functions a variável de ambiente:
//       WGX_API_KEY=<chave atual da API Webgex>
//     (o valor NÃO deve ficar no código nem no git; use o Secret Manager do GCP.)
//   - Se aplicável, ajustar ALLOWED_ORIGINS para o domínio real do site.

const { http } = require('@google-cloud/functions-framework');
const axios = require('axios');

// ---------------------------------------------------------------------------
// Configurações
// ---------------------------------------------------------------------------

// Origem permitida para o navegador. Restrinja ao(s) domínio(s) real(is) do site.
const ALLOWED_ORIGINS = ['https://webgex.com.br', 'https://www.webgex.com.br'];

const MAX_NOME_LEN = 120;
const MAX_EMAIL_LEN = 254;
const MAX_TELEFONE_LEN = 30;
const MAX_CLASSE_LEN = 60;

// Rate limiting simples (em memória) por IP: no máximo X requisições por janela.
const RATE_LIMIT_MAX = 8;           // tentativas máximas por janela
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutos
const rateBucket = new Map();       // chave: IP -> { timestamps[] }

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isAllowedOrigin(origin) {
  if (!origin) return false; // bloqueia requisições sem origem (curl, scripts)
  return ALLOWED_ORIGINS.some((o) => origin === o || origin === o + '/');
}

// Escapa caracteres HTML para evitar XSS ao reutilizar o dado em páginas/e-mails.
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/`/g, '&#96;')
    .replace(/\\/g, '&#92;');
}

// Detecta conteúdo de injeção XSS/SQL e rejeita o payload.
const MALICIOUS_RE = /(<\s*\/?\s*(script|iframe|object|embed|form|link|meta|style|base)\b)|(on(load|error|click|mouseover|focus|blur|change|submit|keyup|keydown)\s*=)|(javascript\s*:)|(vbscript\s*:)|(data\s*:\s*text\/html)|(<\s*svg\b)|(expression\s*\()|(\bunion\s+select\b)|(select\s+\w+\s+from\b)|(\binsert\s+into\b)|(\bdelete\s+from\b)|(\bdrop\s+table\b)|(\balter\s+table\b)|(;\s*--\s)|(\bselect\s+load_file\b)/i;

function isMalicious(value) {
  return typeof value === 'string' && MALICIOUS_RE.test(value);
}

function isEmailValid(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function cleanPhone(value) {
  return String(value || '').replace(/\D/g, '').slice(0, 20);
}

function getClientIp(req) {
  return (
    (req.headers['x-forwarded-for'] && req.headers['x-forwarded-for'].split(',')[0].trim()) ||
    req.ip ||
    'unknown'
  );
}

function allowRequest(ip) {
  const now = Date.now();
  const arr = (rateBucket.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (arr.length >= RATE_LIMIT_MAX) {
    rateBucket.set(ip, arr);
    return false;
  }
  arr.push(now);
  rateBucket.set(ip, arr);
  return true;
}

http('helloHttp', async (req, res) => {
  const origin = req.headers.origin;

  // 1. CORS restrito ao(s) domínio(s) do site (no lugar de '*').
  if (origin && isAllowedOrigin(origin)) {
    res.set('Access-Control-Allow-Origin', origin);
  }
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  // Trata a pré-verificação (OPTIONS) do navegador.
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  // Aceita apenas POST.
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Método não permitido' });
    return;
  }

  // 2. Chave da API a partir de variável de ambiente (nenhum segredo no código).
  const apiKey = process.env.WGX_API_KEY;
  if (!apiKey) {
    console.error('WGX_API_KEY não definida no ambiente.');
    res.status(500).json({ success: false, error: 'Erro de configuração do servidor' });
    return;
  }

  const apiUrl = process.env.WGX_API_URL || 'https://api-v2.webgex.com.br/erp-oportunidades';

  // 3. Rate limiting por IP.
  const ip = getClientIp(req);
  if (!allowRequest(ip)) {
    res.status(429).json({ success: false, error: 'Muitas tentativas. Tente novamente mais tarde.' });
    return;
  }

  // 4. Validação e sanitização da entrada (defesa essencial do lado do servidor).
  const body = req.body || {};

  const nome = String(body.nome || '').trim().slice(0, MAX_NOME_LEN);
  const email = String(body.email || '').trim().toLowerCase().slice(0, MAX_EMAIL_LEN);
  const telefone = String(body.telefone || '').trim().slice(0, MAX_TELEFONE_LEN);
  const classe = String(body.classe != null ? body.classe : '02').slice(0, MAX_CLASSE_LEN);

  // Rejeita qualquer campo com intenção de injeção (XSS/SQL).
  const camposParaValidar = [nome, email, telefone, classe, body.empresa, body.mensagem];
  if (camposParaValidar.some(isMalicious)) {
    console.warn(`[webgex-crm] Payload malicioso rejeitado do IP ${ip}`);
    res.status(400).json({ success: false, error: 'Conteúdo inválido.' });
    return;
  }

  // Validação de formato obrigatório.
  if (!nome) {
    res.status(400).json({ success: false, error: 'Campo "nome" é obrigatório.' });
    return;
  }
  if (!isEmailValid(email)) {
    res.status(400).json({ success: false, error: 'E-mail inválido.' });
    return;
  }

  const phoneClean = cleanPhone(telefone);

  // 5. Monta o payload (valores sanitizados/escapados).
  const dataAtual = new Date();
  const today = dataAtual.toISOString().split('T')[0];
  const horaAtual = dataAtual.toLocaleTimeString('pt-BR', { timeZone: 'America/Fortaleza' });

  const payload = {
    codigoUnidade: '10001',
    situacao: 'E0',
    valor: 175,
    codigoVendedor: '51',
    dataAbertura: today,
    horaAbertura: horaAtual,
    dataFechamento: today,
    horaFechamento: '23:59:59',
    codigoLotacao: '11',
    classe: escapeHtml(classe),
    origem: '03',
    enviaPDV: false,
    cliente: {
      cpfCnpj: 'ISENTO',
      nome: escapeHtml(nome),
      email: escapeHtml(email),
      telefone: escapeHtml(phoneClean),
      celular: escapeHtml(phoneClean),
      emailMarketing: escapeHtml(email),
    },
    itens: [
      {
        idProduto: 'S000002',
        quantidade: 1,
        valorUnitario: 175,
        percentualValorDesconto: 0,
        valorDesconto: 0,
        valorTotal: 175,
      },
    ],
    pagamentos: [
      {
        finalizadora: 'DIN',
        prazo: '1X',
        valor: 175,
        vencimento: today,
      },
    ],
  };

  // 6. Envia para a API Webgex.
  try {
    const response = await axios.post(apiUrl, payload, {
      headers: {
        'Content-Type': 'application/json',
        'WGX-API-KEY': apiKey,
      },
      timeout: 15000,
    });
    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    const detail = error.response ? error.response.data : error.message;
    console.error('Erro na integração:', detail);
    // Retorna status HTTP correto (não mascara o erro) para permitir monitoramento.
    res.status(502).json({ success: false, error: 'Falha ao registrar o lead.' });
  }
});
