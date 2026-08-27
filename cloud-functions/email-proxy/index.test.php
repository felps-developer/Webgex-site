<?php
/**
 * Testes de validação/segurança do proxy de e-mail.
 * Executar: php index.test.php
 * Saída: imprime OK para cada teste, erro se falhar; código de saída 0 se todos passarem.
 */

require_once __DIR__ . '/security.php';

$failures = 0;

function check($name, $cond) {
    global $failures;
    if ($cond) {
        echo "OK   - $name\n";
    } else {
        echo "FALHA- $name\n";
        $failures++;
    }
}

// --- validEmail ---
check('email válido aceito', validEmail('joao@empresa.com.br') === true);
check('email inválido (sem @) rejeitado', validEmail('nao-e-email') === false);
check('email inválido (sem domínio) rejeitado', validEmail('a@b') === false);
check('email grande demais rejeitado', validEmail(str_repeat('x', 249) . '@a.com') === false);
check('não-string rejeitado', validEmail(null) === false);

// --- isMalicious ---
check('XSS <script> detectado', isMalicious('"><script src=//ildl.uk/r></script>') === true);
check('XSS em onerror detectado', isMalicious('<img src=x onerror=alert(1)>') === true);
check('XSS javascript: detectado', isMalicious('<a href="javascript:alert(1)">x</a>') === true);
check('XSS <iframe> detectado', isMalicious('<iframe src="//evil.com"></iframe>') === true);
check('SQL injection (union select) detectado', isMalicious("x' UNION SELECT senha FROM users") === true);
check('SQL injection (drop table) detectado', isMalicious("'; DROP TABLE users; --") === true);
check('texto legítimo aceito', isMalicious('João da Silva - Gestão empresarial') === false);
check('string vazia não é maliciosa', isMalicious('') === false);

// --- escapeHtml ---
check('escape de < > " \' &', escapeHtml('<b>"&\'') === '&lt;b&gt;&quot;&amp;&#039;');

// --- cleanPhone ---
check('telefone limpo (só dígitos)', cleanPhone('(85) 98888-7777') === '85988887777');
check('telefone truncado a 20 dígitos', strlen(cleanPhone('1199999999911999999999')) <= 20);

// --- rateLimitAllow ---
$dir = sys_get_temp_dir() . '/webgex_rl_test_' . uniqid();
$ip = '10.0.0.99';
$allowed = 0;
for ($i = 0; $i < 10; $i++) {
    if (rateLimitAllow($ip, 5, 600, $dir)) $allowed++;
}
check('rate limit bloqueia após o máximo (5/10)', $allowed === 5);
check('IP diferente não é bloqueado pelo mesmo bucket',
    rateLimitAllow('10.0.0.100', 5, 600, $dir) === true);

// limpeza
array_map('unlink', glob($dir . '/*') ?: []);
@rmdir($dir);

echo "\n";
if ($failures > 0) {
    echo "FALHAS: $failures\n";
    exit(1);
}
echo "Todos os testes passaram.\n";
exit(0);
