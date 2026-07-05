import type { Metadata } from "next"
import { OG_IMAGE_DEFAULT_ARRAY } from "@/lib/utils"
import { WebPageSchema } from "@/lib/json-ld"
import { AnniversaryBadge } from "@/components/anniversary-badge"
import { Button } from "@/components/ui/button"
import { Target, HeartHandshake, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sobre a Webgex | 30 anos de ERP, CRM e gestão empresarial",
  description:
    "Conheça a história da Webgex — há 30 anos desenvolvendo ERP, CRM e soluções de gestão para empresas brasileiras. Do varejo ao atacado, da oficina à distribuidora.",
    openGraph: {
    title: "Sobre a Webgex | 30 anos de ERP e gestão",
    description:
      "Há 30 anos a Webgex desenvolve ERP, CRM e PDV para empresas brasileiras. Conheça nossa história.",
    images: OG_IMAGE_DEFAULT_ARRAY,
  },
}

const timeline = [
  { year: "1996", title: "O começo", text: "Nasce a Webgex com a missão de informatizar a gestão de pequenas empresas." },
  { year: "2004", title: "Primeiro ERP integrado", text: "Lançamento da plataforma que unifica financeiro, estoque e vendas." },
  { year: "2012", title: "Expansão de segmentos", text: "Soluções dedicadas para atacado, distribuição e centros automotivos." },
  { year: "2019", title: "Plataforma na nuvem", text: "O Webgex passa a rodar 100% na nuvem, com acesso de qualquer lugar." },
  { year: "2026", title: "30 anos", text: "Mais de 2.500 usuários ativos e uma nova geração do produto." },
]

const values = [
  { icon: Target, title: "Foco no cliente", text: "Cada funcionalidade nasce de uma necessidade real de quem usa." },
  { icon: HeartHandshake, title: "Relação de longo prazo", text: "Clientes que estão conosco há mais de duas décadas." },
  { icon: Lightbulb, title: "Evolução constante", text: "Investimento contínuo em tecnologia e em novas integrações." },
]

export default function SobrePage() {
  const wp = WebPageSchema("Sobre a Webgex | 30 anos de ERP, CRM e gestão empresarial", "Conheça a história da Webgex — há 30 anos desenvolvendo ERP, CRM e soluções de gestão para empresas brasileiras.", "/sobre")
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wp) }} />
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 webgex-grid-bg opacity-60" aria-hidden="true" />
          <div className="container relative py-20 text-center lg:py-28">
            <AnniversaryBadge className="mx-auto" />
            <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-secondary lg:text-6xl">
              Três décadas escrevendo a história da gestão empresarial
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Desde 1996, a Webgex — parte do grupo UNIGEX — ajuda empresas a crescerem com organização, controle e
              tecnologia de verdade.
            </p>
            <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-accent/20 bg-accent/5 p-8 lg:p-10">
              <p className="text-balance text-xl font-semibold leading-relaxed text-secondary lg:text-2xl">
                Contribuindo com o sucesso de nossos clientes
              </p>
              <p className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-accent lg:text-4xl">
                ... a 30 anos!
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border py-20 lg:py-28">
          <div className="container">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-secondary lg:text-4xl">
              Nossa trajetória
            </h2>
            <ol className="mt-12 space-y-0">
              {timeline.map((item, i) => (
                <li key={item.year} className="grid gap-4 border-l-2 border-border pl-8 pb-12 last:pb-0 sm:grid-cols-[160px_1fr] sm:gap-8 relative">
                  <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-background bg-primary" aria-hidden="true" />
                  <span className="font-mono text-2xl font-bold text-primary">{item.year}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">{item.title}</h3>
                    <p className="mt-1 text-muted-foreground">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-border bg-muted/40 py-20 lg:py-28">
          <div className="container">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-secondary lg:text-4xl">
              O que nos move
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-border bg-card p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-secondary">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container text-center">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-secondary lg:text-4xl">
              Vamos escrever os próximos 30 anos juntos?
            </h2>
            <div className="mt-8 flex justify-center">
              <Button size="lg" asChild>
                <Link href="/contato">
                  Falar com especialista <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  )
}
