import type { Metadata } from "next"
import { OG_IMAGE_DEFAULT_ARRAY } from "@/lib/utils"
import { WebPageSchema } from "@/lib/json-ld"
import dynamic from "next/dynamic"

const MaturityTool = dynamic(() => import("@/components/ferramentas/maturity-tool").then((m) => ({ default: m.MaturityTool })))

export const metadata: Metadata = {
  title: "Diagnóstico de Maturidade Digital | ERP, CRM e Gestão — Webgex",
  description:
    "Avalie gratuitamente a maturidade digital da sua empresa em 10 perguntas. Diagnóstico sobre processos, finanças, dados, integração e CRM. Recomendações para melhorar sua gestão com ERP.",
    openGraph: {
    title: "Avaliação de Maturidade Digital | Webgex",
    description:
      "Diagnóstico gratuito de maturidade digital. Descubra como ERP, CRM e integração podem transformar sua gestão.",
    images: OG_IMAGE_DEFAULT_ARRAY,
  },
}

export default function MaturidadePage() {
  const wp = WebPageSchema("Diagnóstico de Maturidade Digital | ERP, CRM e Gestão — Webgex", "Avalie gratuitamente a maturidade digital da sua empresa em 10 perguntas.", "/maturidade")
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wp) }} />
      <script dangerouslySetInnerHTML={{ __html: "dataLayer.push({'pageType': 'maturidade'});" }} />

        <section className="webgex-grid-bg border-b border-border/60 bg-muted/30">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center md:py-20">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Ferramenta gratuita
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-secondary text-balance md:text-5xl">
              Avaliação de Maturidade Digital
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Entenda onde sua gestão está hoje e quais os próximos passos para
              crescer com mais controle, integração e dados.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20">
          <MaturityTool />
        </section>

    </>
  )
}
