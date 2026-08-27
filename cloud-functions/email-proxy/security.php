<?php
/**
 * Funções de validação/segurança reutilizáveis do proxy de e-mail.
 * Separadas para permitir testes unitários (CLI) independentes.
 */

/** Valida formato de e-mail. */
function validEmail($email) {
    return is_string($email) && filter_var($email, FILTER_VALIDATE_EMAIL) !== false
        && strlen($email) <= 254;
}

/** Detecta conteúdo malicioso (XSS/SQLi). */
function isMalicious($value) {
    if (!is_string($value) || trim($value) === '') return false;
    return (bool) preg_match(
        '/<\s*\/?\s*(script|iframe|object|embed|form|link|meta|style|base)\b|' .
        'on(load|error|click|mouseover|focus|blur|change|submit|keyup|keydown)\s*=|' .
        'javascript\s*:|vbscript\s*:|data\s*:\s*text\/html|<\s*svg\b|expression\s*\(|' .
        '\bunion\s+select\b|(\BINSERT\s+INTO\b)|\bDROP\s+TABLE\b|\bDELETE\s+FROM\b|' .
        ';\s*--\s|select\s+load_file\b/i',
        $value
    );
}

/** Escapa texto para uso seguro em HTML. */
function escapeHtml($value) {
    return htmlspecialchars((string)$value, ENT_QUOTES, 'UTF-8');
}

/** Normaliza telefone para apenas dígitos (até 20). */
function cleanPhone($value) {
    return substr(preg_replace('/\D+/', '', (string)$value), 0, 20);
}

/** Rate limit por IP baseado em arquivo (thread-safe via flock). */
function rateLimitAllow($ip, $max = 8, $windowSec = 600, $dir = null) {
    if ($ip === '' || $ip === 'unknown') return true; // sem IP: não bloqueia (fallback seguro)
    if ($dir === null) $dir = sys_get_temp_dir() . '/webgex_ratelimit';
    if (!is_dir($dir) && !@mkdir($dir, 0770, true)) return true;
    $file = $dir . '/' . preg_replace('/[^A-Za-z0-9._\-]/', '_', $ip) . '.json';
    $now = time();
    $fp = @fopen($file, 'c+');
    if (!$fp) return true;
    if (!flock($fp, LOCK_EX)) { fclose($fp); return true; }
    $raw = stream_get_contents($fp);
    $arr = $raw ? json_decode($raw, true) : [];
    if (!is_array($arr)) $arr = [];
    $arr = array_values(array_filter($arr, function ($t) use ($now, $windowSec) {
        return ($now - $t) < $windowSec;
    }));
    if (count($arr) >= $max) {
        ftruncate($fp, 0); rewind($fp); fwrite($fp, json_encode($arr));
        flock($fp, LOCK_UN); fclose($fp);
        return false;
    }
    $arr[] = $now;
    ftruncate($fp, 0); rewind($fp); fwrite($fp, json_encode($arr));
    flock($fp, LOCK_UN); fclose($fp);
    return true;
}
