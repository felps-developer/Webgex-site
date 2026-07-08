# Webgex 30 anos — Site Institucional

Site institucional da **Webgex** em comemoração aos **30 anos** de operação. Static export (Next.js) hospedado em **Google Cloud Storage**.

---

## Stack

| Tecnologia | Versão |
|------------|--------|
| Next.js | 15.5.15 (`output: "export"`) |
| React | 19.2.0 |
| TypeScript | 5.x |
| Tailwind CSS | 3.4.17 |
| shadcn/ui | 57 componentes |
| Ícones | lucide-react |
| Gráficos | recharts (radar) |
| Backend | Google Cloud Function (leads → CRM) |
| Hospedagem | Google Cloud Storage (bucket estático) |

## Comandos

```bash
npm run dev       # Desenvolvimento (http://localhost:3000)
npm run build     # Build estático → /out/
npm run preview   # Preview do build (via serve)
```

## Deploy (Google Cloud Storage)

1. **Build** o site: `npm run build`
2. Copie **apenas o conteúdo** da pasta `out/` para a raiz do bucket (não copie a pasta `out/` em si, nem o projeto inteiro)
3. Configure o website hosting:
   ```bash
   gsutil web set -m index.html -e 404.html gs://webgex-site
   ```

> ⚠️ Apenas os arquivos gerados em `out/` devem ser enviados ao bucket. Código fonte, `node_modules/` e arquivos de configuração do projeto **não** pertencem ao bucket.

## Estrutura

```
app/
├── (site)/               # Layout principal (header + footer)
│   ├── page.tsx          # Home
│   ├── produto/          # Módulos do ERP
│   ├── planos/           # Planos e preços
│   ├── sobre/            # História 30 anos
│   ├── contato/          # Formulário + canais
│   ├── blog/             # Listagem + [slug] (50 posts)
│   ├── escopo/           # Montador de proposta
│   └── maturidade/       # Quiz de maturidade digital
├── campanha/[slug]/      # Landing pages por segmento
│   ├── varejo
│   ├── distribuicao
│   ├── automotivo
│   └── moveis
├── not-found.tsx         # Página 404 customizada
├── sitemap.ts            # Sitemap dinâmico (66 URLs)
├── layout.tsx            # Root layout (GTM, JSON-LD, SEO)
└── globals.css           # Tokens CSS (light/dark)

components/
├── home/                 # Hero, Modules, Segments, Proof, CTA
├── blog/                 # BlogList (filtro + paginação)
├── contato/              # ContactForm
├── campanha/             # LeadForm (WhatsApp + CRM)
├── ferramentas/          # MaturityTool + ScopeBuilder
├── ui/                   # 57 componentes shadcn/ui
├── site-header.tsx       # Nav principal + mobile sheet
├── site-footer.tsx       # Footer com links e badge 30 anos
├── site-logo.tsx         # Logo component
├── whatsapp-button.tsx   # Botão flutuante WhatsApp
├── anniversary-badge.tsx # Badge "30 anos"
└── theme-provider.tsx    # next-themes (não integrado)

lib/
├── campaigns.ts          # Dados das 4 campanhas
├── blog-data.ts          # 50 posts do blog
├── form-submit.ts        # Envio para Cloud Function + WhatsApp
├── json-ld.ts            # Schema.org (Organization, Article, FAQ, etc.)
├── maturity-assessment.ts# Lógica do quiz (10 perguntas, 5 dimensões)
├── scope-builder.ts      # Lógica do montador de proposta
└── utils.ts              # Utilitários (cn)

public/
├── erp-dashboard.jpg     # Hero image (tela real do ERP)
├── logo-webgex.png       # Logo principal (horizontal)
├── logo-webgex-branca.png# Logo para dark mode (cortada do "Logo Completa - branca")
├── parceiros/            # Logos oficiais dos parceiros
│   ├── cappta.png
│   ├── boavista.png
│   ├── indice.png
│   └── software-express.png
├── robots.txt            # SEO
├── blog/                 # 50 imagens de capa (jpg/png)
└── ...
out/                      # Build estático gerado
```

## Funcionalidades Implementadas

- **Home**: Hero com badge 30 anos + stats, módulos, segmentos, depoimentos (carrossel 4), CTA
- **Blog**: 50 posts com filtro por categoria, ordenação cronológica, paginação (9/página), imagens de capa
- **Landing pages**: 4 segmentos (varejo, distribuição, automotivo, móveis) com LeadForm
- **Ferramentas**: Montador de Escopo, Quiz de Maturidade Digital
- **Admin**: Dashboard mock
- **WhatsApp**: Botão flutuante fixo com link direto (55) 99802-0016
- **SEO**: Sitemap.xml (66 URLs), robots.txt, JSON-LD (Organization, WebPage, Article, Breadcrumb, FAQ, Product, AggregateOffer)
- **404**: Página customizada
- **GTM**: Google Tag Manager (GTM-WPX79XFX)
- **Performance**: Imagens otimizadas (JPEG q80, PNG → JPG)

## Integrações

- **Google Cloud Function** → `POST` para leads do CRM
- **Google Tag Manager** → Tracking e analytics
- **WhatsApp** → `wa.me/5585998020016`

## Tracking & Meta Tags (Verificação Obrigatória em Updates)

### Tags Presentes
| Tag | Localização | Status |
|-----|-------------|--------|
| GTM `GTM-WPX79XFX` (script + iframe) | `app/layout.tsx:100-130` | ✅ Presente |
| `dataLayer.push` (pageType) | campanha, escopo, maturidade | ✅ Presente |
| `Content-Security-Policy` (domínios Google) | `app/layout.tsx:87-95` | ✅ Presente |
| `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` | `app/layout.tsx:96-98` | ✅ Presente |

### Tags Ausentes (Verificar se foram removidas acidentalmente)
| Tag | Propósito | Status |
|-----|-----------|--------|
| `<meta name="google-site-verification" content="..." />` | Verificação do Google Search Console | ❌ **AUSENTE** — foi removida em update anterior |

> ⚠️ **Sempre verificar** após qualquer build/deploy se as meta tags de tracking acima constam no HTML gerado em `out/`. Especialmente o `google-site-verification`, que já foi removido acidentalmente uma vez.

## Funcionalidades Implementadas (v1.1)

### Dark Mode
- `next-themes` integrado no root layout com `attribute="class"` e `defaultTheme="system"`
- Toggle ciclo: claro → escuro → sistema, disponível no header (desktop e mobile)
- Variáveis CSS `.dark` no `globals.css` com `color-scheme: dark`
- Respeita `prefers-color-scheme` do sistema operacional
- Componente: `components/theme-toggle.tsx`

### Acessibilidade (WCAG)
- **Skip to content**: link "Pular para o conteúdo principal" visível no foco
- **Focus visible**: outline global com `focus-visible` em todos os elementos interativos
- **`prefers-reduced-motion`**: animações e transições desabilitadas quando configurado
- **`color-scheme`**: definido para light/dark (formulários nativos corretos)
- **ARIA labels**: navegações com `aria-label`, botões de paginação e depoimentos
- **`aria-hidden`**: ícones decorativos ocultos de leitores de tela (~25 correções em home, blog, ferramentas, contato e campanha)
- **Heading hierarchy**: h1 → h2 → h3 consistente em todas as páginas
- **Contraste**: variáveis dark mode ajustadas para WCAG AA

## Hero Visual (v1.2)

- **Gradientes decorativos** com a cor accent (laranja/âmbar) e primary (azul) nos Heros:
  - **Home**: dois círculos radiais (accent no canto superior direito, primary no canto inferior esquerdo)
  - **Campanhas**: círculo radial accent no canto superior direito
- Efeito sutil (`opacity-15`/`opacity-10`) que aquece o fundo sem poluir — funciona em light e dark mode

## Performance (v1.2)

- **Assets removidos**: `webgex-logo.png` (1,3 MB) e `empresa-depende.png` (2,3 MB) — não utilizados
- **Imagens comprimidas**: `erp-dashboard.png` 1,3 MB → 181 KB JPG; `webgex-completa-30-anos.png` 1,1 MB → 206 KB JPG
- **Lazy loading**: imagens de grid do blog e posts relacionados agora carregam com `loading="lazy"`
- **Economia total**: ~5,6 MB de imagens eliminados

## Logo (v1.2 → v1.3)

- `site-logo.tsx` é client component com `useTheme` — troca a imagem (logo-webgex.png ↔ logo-webgex-branca.png) em vez de usar filtro CSS
- Logo branco cortado manualmente de `"Logo Completa - branca.png"` (Unigex Dropbox/Marketing)
- `variant="light"` no footer funciona corretamente

## Remoções (v1.2)

- **Rota `/admin` removida**: era um mock de CMS (dashboard, CRUD de posts, config) sem servidor, autenticação ou banco de dados — incompatível com static export. Eliminado ~8 KB do bundle.

## Versão Estável — v1.3 (02/07/2026)

- **Logo dark mode**: substituído filtro CSS por imagem branca dedicada (`logo-webgex-branca.png`)
- **Depoimentos reais**: trocados mocks por dados reais do site de produção (Ibyte, Thiago Barroso/TrokService, Taygro Menezes/Gocase, Beto's Car)
- **Clientes → Parceiros**: seção "Clientes que confiam" removida para reformulação posterior; "Parceiros de negócios" exibe logos oficiais (Cappta, Software Express, Índice Consultoria, Boavista) baixadas do site de produção
- **Seção de parceiros**: logos reais com links externos
- **Stats**: "+2.500 empresas atendidas" → "+3.000 usuários ativos" em todas as páginas (home, meta description, timeline, campanhas)
- **Typos**: "Implantaçao" → "Implantação", "Móveis e Decoracao" → "Móveis e Decoração" em `lib/campaigns.ts`
- **Imagem ERP**: trocada imagem genérica por screenshot real do sistema (`tela-erp.png` → `erp-dashboard.jpg`)

## Versão Estável — v1.5 (04/07/2026)

### JSON-LD Estruturado (Schema.org)
- **`WebPageSchema`**: função genérica em `lib/json-ld.ts` com `@type: WebPage`, `@id`, `url`, `name`, `description`, `inLanguage`, `isPartOf`, `about`
- **WebPageSchema adicionado** em todas as 10 páginas principais (home, produto, planos, sobre, contato, escopo, maturidade, blog listing, blog/[slug] via ArticleSchema, campanha/[slug] via ProductSchema)
- **`ProductSchema` inline** na página de produto com `AggregateOffer` (ERP, PDV, Armazenamento — BRL)
- **`FAQSchema` com `pageId`**: parâmetro opcional para reuso em contato (evita duplicação de @id)
- **Organization schema** atualizado: `legalName`, `foundingDate: "1996"`, `address` (Fortaleza/CE/BR)

### SEO / GEO
- **`metadataBase`** + **`alternates.canonical`** configurados no root layout
- **`og:image`** padronizado via `OG_IMAGE_DEFAULT_ARRAY` em `lib/utils.ts` — compartilhado entre todas as páginas
- **Blog images**: `alt` text corrigido (usa `post.title`) em featured, cards, post e relacionados

### Segurança
- **CSP meta tag**: `default-src 'self'`; permite GTM, Facebook, Google Ads, DoubleClick, Cloud Functions, WhatsApp API; `'unsafe-inline'` + `'unsafe-eval'`
- **`sanitize()`** (`lib/form-submit.ts`): HTML escaping em todos os inputs antes de enviar para CRM, email e WhatsApp
- **Security headers**: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: geolocation=(), microphone=(), camera=()`
- **Preconnect GTM**: `link rel="preconnect"` para `https://www.googletagmanager.com`

### GTM Tracking
- `dataLayer.push({'pageType': ...})` adicionado nas landpages campanha (com slug + segmento), escopo e maturidade

### Infra / Build
- **Sitemap dinâmico**: rotas de campanha geradas de `lib/campaigns.ts` (não mais hardcoded)
- **Build limpo**: 66 páginas estáticas, 0 erros, 0 warnings (Next.js 15.5.15 static export)
- **TypeScript**: `tsc --noEmit` passa com zero erros
- **`.gitignore`**: `env*` → `env*\n!.env.example`; `.env.example` re-adicionado ao tracking

## Pendências

### Imagens por Segmento (v1.5 — 04/07/2026)

| Segmento | Imagem | Status |
|----------|--------|--------|
| Varejo (PDV) | `/pdv.png` | ✅ Substituída |
| Automotivo | `/erp-automotivo.png` | ✅ Substituída |
| Móveis e Decoração | `/erp-moveis.png` | ✅ Substituída |
| Distribuição | `/erp-distribuicao.png` | ✅ Substituída |
| Fallback/páginas genéricas | `/erp-calculotributos.png` | ✅ Substituída |

**Home hero** (`home-hero.tsx`) ✅ Substituída por imagem gerada por IA.

### Depoimentos e Conteúdo Mockado

1. **Depoimentos das landpages** (`lib/campaigns.ts`) — ✅ **Concluído** (mantido mock, substituição futura)
2. **Depoimentos da home** (`components/home/home-proof.tsx`) — ✅ **Concluído** (mantido mock, substituição futura)
3. **Casos de estudo genéricos** (`lib/blog-data.ts`) — ✅ **Concluído** (mantido mock, substituição futura)

### Imagens Placeholder

4. **Placeholders** (`public/`) — ✅ **Removidos** (5 arquivos, não referenciados)

### Dados Hardcoded (futuro CMS)

6. **Blog** (`lib/blog-data.ts`) — ✅ **Mantido** (hardcoded intencional para SEO/GEO)
7. **Campanhas** (`lib/campaigns.ts`) — ✅ **Mantido** (dados fixos intencionais)
8. **Preços** (`app/(site)/planos/page.tsx`) — ✅ **Mantido** (planos fixos intencionais)
9. **Montador de escopo** (`lib/scope-builder.ts`) — ✅ **Alinhado aos planos** (R$ 175/user/mês, setup R$ 175/módulo)
10. **Quiz de maturidade** — ✅ **Aprimorado** (gap personalizado, compartilhamento, comparativo, lead magnet condicional)

### UX e Conteúdo

11. **Seção "Clientes que confiam"** — ✅ **Mantido** (reformulação futura)
12. **Home hero stats** — ✅ **Mantido** (validar futuramente com marketing)
13. **Imagens dos parceiros** — ✅ **Aumentadas** (container: h-16→h-20, width: 120→160px)
14. **Logo dark mode** — ✅ **OK** (crop verificado)
15. **Navigation/Footer hardcoded** — ✅ **Mantido** (necessário para validações com integrações)
16. **Contato FAQ** (`app/(site)/contato/page.tsx`) — ✅ **Mantido** (conteúdo ok)
17. **Timeline empresa** (`app/(site)/sobre/page.tsx`) — ✅ **Mantido** (conteúdo ok)

### Infra / Código

18. **TypeScript** ✅ — `ignoreBuildErrors: false` (type checking ativo, zero erros)
19. **Type error** (`lib/json-ld.ts:104`) — ✅ **Corrigido** (`slug` adicionado ao tipo `ProductSchema`)
20. **`.gitignore`**: `env*` → `env*\n!.env.example` + re-adicionado ao tracking — ✅ **Resolvido**
21. **`WebPageSchema`** (`lib/json-ld.ts`) — ✅ **Adicionado** com `@type: WebPage`, `@id`, `inLanguage`, `isPartOf`, `about`
22. **`ProductSchema` inline** na página `/produto` — ✅ **Adicionado** com `AggregateOffer` (3 ofertas em BRL)
23. **CSP meta tag** (`app/layout.tsx`) — ✅ **Implementado** com GTM/Facebook/Google Ads/DoubleClick/Cloud Functions
24. **`sanitize()`** (`lib/form-submit.ts`) — ✅ **Implementado** HTML escaping em todos os forms
25. **Security meta tags** (`app/layout.tsx`) — ✅ **Adicionados** X-Content-Type-Options, Referrer-Policy, Permissions-Policy
26. **`dataLayer.push`** — ✅ **Adicionado** em campanhas, escopo, maturidade
27. **Sitemap dinâmico** (`app/sitemap.ts`) — ✅ **Rotas de campanha** geradas de `lib/campaigns.ts`
28. **Blog alt text** — ✅ **Corrigido** (usa `post.title` em vez de `alt=""` em 4 pontos)
