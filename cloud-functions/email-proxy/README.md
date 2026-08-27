# Proxy de e-mail — envio via xMailer (endpoint de maturidade)

`index.php` enrijece a versão original. É o endpoint que recebe o corpo do
diagnóstico de maturidade e envia o e-mail pela API do xMailer.

## O que esta versão corrige

| Anterior | Corrigido |
|---|---|
| Senha SMTP hardcoded no código | Lida de `SMTP_SENHA` (variável de ambiente) |
| CORS `Access-Control-Allow-Origin: *` | Restrito a `ALLOWED_ORIGINS` |
| Sem rate limit (permitia envio em massa/spam) | Rate limit por IP (8 req / 10 min) |
| Sem validação de entrada | Valida e-mail; rejeita XSS/SQLi; limita tamanho |
| Assunto/remetente fixos | Aceita `subject`/`bcc` do request (fallback p/ padrão de maturidade) |
| Vazava detalhes da API no erro | Retorna status HTTP corretos, sem expor resposta interna |

## Arquivos

- `index.php` — ponto de entrada da função.
- `security.php` — helpers (validEmail, isMalicious, escapeHtml, cleanPhone, rateLimitAllow).
- `index.test.php` — 18 testes de validação/segurança.

## Variáveis de ambiente (obrigatórias)

- `SMTP_SENHA` — senha SMTP (NÃO colocar no código/git). **A senha anterior era
  vazada no código; ao trocar o valor, atualize a env var/Secret Manager.**
- `SMTP_USUARIO` (opcional) — padrão `smtp@webgex.com.br`.

Ajuste também `ALLOWED_ORIGINS` em `index.php` para os domínios reais do site.

## Testar

```bash
php -l index.php && php -l security.php   # lint de sintaxe
php index.test.php                          # testes unitários (18)
```

Testar de ponta a ponta (envio real para o xMailer):

```bash
SMTP_SENHA=SUA_SENHA php -S 127.0.0.1:8080 -t .
curl -i -X POST http://127.0.0.1:8080 \
  -H "Origin: https://webgex.com.br" \
  -d "email=alguem@empresa.com.br&message=<h1>Olá</h1>"
```

> Para não disparar e-mails reais durante testes, use um payload inválido
> (ex.: e-mail sem `@`) e confirme que a resposta é `400` antes de qualquer envio.

## Observação sobre compatibilidade com o site

O site cliente (`lib/form-submit.ts` → `sendProposalEmail`) envia
`email`, `bcc`, `subject`, `message` via `FormData` para
`https://unigex-email-...run.app`. Este `index.php` é o endpoint de maturidade
(campos `email`, `phone`, `message`) e agora também aceita `subject`/`bcc`. Se
este não for o endpoint usado pelo fluxo de escopo, o deploy deve apontar para o
serviço correspondente na infraestrutura.
