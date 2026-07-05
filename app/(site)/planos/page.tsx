import type { Metadata } from "next"
import { OG_IMAGE_DEFAULT_ARRAY } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { FAQSchema, WebPageSchema } from "@/lib/json-ld"

export const metadata: Metadata = {
  title: "Planos do ERP, CRM e PDV | Preços — Webgex",
  description:
    "Planos do ERP Webgex: ERP completo, PDV online e armazenamento em nuvem. Preços acessíveis para varejo, atacado e centros automotivos. Sem fidelidade.",
  openGraph: {
    title: "Planos do ERP, CRM e PDV | Preços — Webgex",
    description:
      "Conheça os planos do ERP Webgex com CRM integrado e PDV online para varejo, atacado e automotivo.",
    images: OG_IMAGE_DEFAULT_ARRAY,
  },
}

const plans = [
  {
    name: "ERP Webgex",
    description: "O sistema de gestão completo para o seu negócio, do financeiro ao fiscal.",
    price: "R$ 175",
    note: "por usuário / mês",
    highlighted: true,
    features: [
      "Sistema integral com todas as funcionalidades",
      "Financeiro, controladoria, operações, CRM e fiscal",
      "Usuários ilimitados por área",
      "Relatórios gerenciais e DRE",
      "Suporte técnico dedicado",
      "Atualizações contínuas",
    ],
    cta: "Falar com especialista",
  },
  {
    name: "PDV Webgex",
    description: "Frente de caixa rápida e totalmente integrada ao ERP.",
    price: "R$ 175",
    note: "por máquina / mês (equivale a 1 usuário)",
    highlighted: false,
    features: [
      "Venda offline e online",
      "Integração fiscal NFC-e",
      "Controle de estoque em tempo real",
      "Gestão de múltiplas lojas",
      "TEF e meios de pagamento",
    ],
    cta: "Quero o PDV",
  },
  {
    name: "Armazenamento",
    description: "Espaço extra em nuvem para fotos, anexos e documentos digitalizados.",
    price: "R$ 100",
    note: "por 50 GB / mês (usado com o ERP)",
    highlighted: false,
    features: [
      "50 GB adicionais por plano",
      "Para fotos de produtos e anexos",
      "Backup automático diário",
      "Alta disponibilidade",
      "Escalável conforme o uso",
    ],
    cta: "Contratar armazenamento",
  },
]

const faqs = [
  {
    q: "Existe período de fidelidade?",
    a: "Trabalhamos com contratos flexíveis. As condições específicas são alinhadas durante a proposta comercial, de acordo com o porte da sua operação.",
  },
  {
    q: "A migração dos meus dados está inclusa?",
    a: "Sim. Nossa equipe de implantação conduz a migração dos seus dados atuais e o treinamento da sua equipe para garantir uma transição tranquila.",
  },
  {
    q: "O sistema é vendido por módulos ou completo?",
    a: "O ERP Webgex é comercializado de forma integral. Você tem acesso a todas as funcionalidades — financeiro, controladoria, operações, CRM e fiscal — e escolhe o que vai utilizar na sua operação. Não é preciso contratar módulos separados.",
  },
  {
    q: "O sistema está adaptado à reforma tributária?",
    a: "Sim. O ERP é atualizado continuamente para manter sua empresa em conformidade com a reforma tributária e todas as obrigações fiscais federais, estaduais e municipais.",
  },
]

export default function PlanosPage() {
  const faqJsonLd = FAQSchema(faqs)
  const wp = WebPageSchema("Planos do ERP, CRM e PDV | Preços — Webgex", "Planos do ERP Webgex: ERP completo, PDV online e armazenamento em nuvem.", "/planos")

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wp) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 webgex-grid-bg opacity-60" aria-hidden="true" />
          <div className="container relative py-20 text-center lg:py-24">
            <h1 className="mx-auto max-w-3xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-secondary lg:text-5xl">
              Planos transparentes e sem surpresas
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              ERP completo com tudo incluso. PDV integrado e armazenamento extra para quem precisa. Preços fixos e sem pegadinhas.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "flex flex-col rounded-2xl border bg-card p-8",
                  plan.highlighted ? "border-primary shadow-xl shadow-primary/10 ring-1 ring-primary" : "border-border",
                )}
              >
                {plan.highlighted && (
                  <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                    Mais contratado
                  </span>
                )}
                <h3 className="text-xl font-bold text-secondary">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-6">
                  <p className="text-3xl font-extrabold text-secondary">{plan.price}</p>
                  <p className="text-sm text-muted-foreground">{plan.note}</p>
                </div>
                <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-secondary">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="mt-8" variant={plan.highlighted ? "default" : "outline"} asChild>
                  <Link href="/contato">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-muted/40 py-20 lg:py-24">
          <div className="container max-w-3xl">
            <h2 className="text-center text-balance text-3xl font-bold tracking-tight text-secondary lg:text-4xl">
              Perguntas frequentes
            </h2>
            <Accordion type="single" collapsible className="mt-10">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold text-secondary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
    </>
  )
}
