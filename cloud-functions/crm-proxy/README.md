# Cloud Function — proxy de envio de leads para a API Webgex (`helloHttp`)

Função corrigida/enrijecida do ponto de vista de segurança. Substitui a versão
anterior que tinha a chave da API no código, não validava entrada, usava CORS
aberto (`*`) e mascarava erros (retornava 200 sempre).

## O que esta versão corrige

| Anterior | Corrigido |
|---|---|
| `WGX-API-KEY` hardcoded no código e no git | Lida de `process.env.WGX_API_KEY` (Sem Secret Manager) |
| Sem validação de entrada | Valida e rejeita XSS/SQL; valida e-mail; escapa HTML |
| CORS `Access-Control-Allow-Origin: *` | Restrito a `ALLOWED_ORIGINS` |
| Retornava HTTP 200 mesmo em erro | Retorna 400/405/429/500/502 corretos |
| Sem limite de uso | Rate limit por IP (8 requisições / 10 min) |
| Campos sem limite de tamanho | Truncamento (nome 120, e-mail 254, telefone 30, classe 60) |

## Requisitos antes de implantar

1. **Rotacionar/revogar a chave antiga** (que vazou no git):
   — Gerar uma nova e registrar no Secret Manager do projeto GCP (projeto `webgex`).
2. Definir a variável de ambiente `WGX_API_KEY` com a nova chave
   (no Secret Manager e referenciada no serviço).
3. Ajustar `ALLOWED_ORIGINS` em `index.js` para os domínios reais do site
   (ex.: `https://webgex.com.br`, `https://www.webgex.com.br`).
4. Opcional: definir `WGX_API_URL` (padrão:
   `https://api-v2.webgex.com.br/erp-oportunidades`).

## Como rodar localmente

```bash
npm install
WGX_API_KEY=SUA_CHAVE npm start   # sobe na porta 8080 (functions-framework)
```

Testar:

```bash
curl -i -X POST http://localhost:8080 -H "Content-Type: application/json" \
  -H "Origin: https://webgex.com.br" \
  -d '{"nome":"João","email":"joao@empresa.com.br","telefone":"(85) 98888-7777","classe":"04"}'
```

## Como rodar os testes

```bash
npm test
```
Cobre: payload legítimo, rejeição de XSS (`<script>`), SQL injection
(`UNION SELECT`), e-mail inválido, rate limiting e exigência da chave via env.

## Como implantar

### Cloud Function (v2)

```bash
gcloud functions deploy crm-proxy \
  --project=webgex \
  --runtime=nodejs20 \
  --region=southamerica-east1 \
  --trigger-http \
  --allow-unauthenticated \
  --source=./cloud-functions/crm-proxy \
  --entry-point=helloHttp \
  --set-env-vars='WGX_API_KEY=SUA_CHAVE' \
  --timeout=30 \
  --memory=256MB
```

> Prefira setar `WGX_API_KEY` via **Secret Manager** em vez de `--set-env-vars`.

### Cloud Run (se o proxy migrou para lá)

```bash
gcloud run deploy webgex-crm-proxy \
  --project=webgex \
  --source=./cloud-functions/crm-proxy \
  --region=southamerica-east1 \
  --allow-unauthenticated \
  --set-env-vars='WGX_API_KEY=SUA_CHAVE'
```

## Nota importante

O site cliente (`lib/form-submit.ts`) já envia os dados do formulário para a URL
`https://webgex-crm-proxy-...run.app`. Após reimplantar com esta versão, confirme
que a URL do serviço continua a mesma (ou atualize `CRM_URL` em
`lib/form-submit.ts`). O proxy de e-mail é uma função/serviço **separado**
(`unigex-email-...run.app`) e deve receber as mesmas correções quando o código
for localizado.
