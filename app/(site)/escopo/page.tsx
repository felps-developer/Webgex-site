import type { Metadata } from "next"
import { OG_IMAGE_DEFAULT_ARRAY } from "@/lib/utils"
import { WebPageSchema } from "@/lib/json-ld"
import dynamic from "next/dynamic"

const ScopeBuilder = dynamic(() => import("@/components/ferramentas/scope-builder").then((m) => ({ default: m.ScopeBuilder })))

export const metadata: Metadata = {
  title: "Montar Proposta | Escopo de ERP, CRM e PDV — Webgex",
  description:
    "Monte seu projeto Webgex: selecione as áreas do sistema ERP, CRM e PDV, porte da empresa e serviços adicionais. Receba estimativa de investimento e prazo de implantação na hora.",
  openGraph: {
    title: "Montar Proposta | Escopo de ERP, CRM e PDV — Webgex",
    description:
      "Configure seu ERP com CRM e PDV integrados. Escolha as funcionalidades e receba uma estimativa personalizada.",
    images: OG_IMAGE_DEFAULT_ARRAY,
  },
}

export default function EscopoPage() {
  const wp = WebPageSchema("Montar Proposta | Escopo de ERP, CRM e PDV — Webgex", "Monte seu projeto Webgex: selecione as áreas do sistema ERP, CRM e PDV, porte da empresa e serviços adicionais.", "/escopo")
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wp) }} />
      <script dangerouslySetInnerHTML={{ __html: "dataLayer.push({'pageType': 'escopo'});" }} />

        <section className="webgex-grid-bg border-b border-border/60 bg-muted/30">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center md:py-20">
            <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
              Monte seu projeto
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-secondary text-balance md:text-5xl">
              Gerador de Escopo e Proposta
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Selecione as áreas e serviços que sua empresa precisa e veja uma
              estimativa de investimento e prazo de implantação em tempo real.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <ScopeBuilder />
        </section>

    </>
  )
}
