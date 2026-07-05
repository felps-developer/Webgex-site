import type { Metadata } from "next"
import { OG_IMAGE_DEFAULT_ARRAY } from "@/lib/utils"
import { FAQSchema, WebPageSchema } from "@/lib/json-ld"
import { ContactForm } from "@/components/contato/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contato | Demonstração de ERP, CRM e PDV — Webgex",
  description:
    "Solicite uma demonstração gratuita do ERP Webgex com CRM integrado e PDV online. Fale com um especialista em gestão empresarial para varejo, atacado ou centros automotivos.",
  openGraph: {
    title: "Contato | Demonstração de ERP, CRM e PDV — Webgex",
    description:
      "Agende uma demonstração gratuita do ERP Webgex. CRM, PDV e gestão empresarial completa para sua empresa.",
    images: OG_IMAGE_DEFAULT_ARRAY,
  },
}

const channels = [
  { icon: Mail, label: "E-mail", value: "helpdesk@unigex.com.br" },
  { icon: Phone, label: "Telefone", value: "(85) 99802-0016" },
  { icon: MapPin, label: "Endereço", value: "Fortaleza, CE" },
  { icon: Clock, label: "Atendimento", value: "Seg a sex, 8h às 18h" },
]

const faqs = [
  {
    q: "Quanto tempo leva a implantação?",
    a: "Depende do porte e dos módulos contratados, mas a maioria das empresas está operando entre 2 e 6 semanas, com acompanhamento da nossa equipe em todas as etapas.",
  },
  {
    q: "O Webgex funciona na nuvem?",
    a: "Sim. A plataforma é 100% em nuvem, acessível de qualquer lugar e com backups automáticos, sem necessidade de servidores próprios.",
  },
  {
    q: "Existe suporte após a contratação?",
    a: "Oferecemos suporte contínuo com equipe especializada, além de atualizações constantes, incluindo o módulo fiscal sempre atualizado com a reforma tributária e em conformidade com a legislação.",
  },
  {
    q: "Posso migrar meus dados atuais?",
    a: "Sim. Nossa equipe auxilia na migração dos dados do seu sistema atual para o Webgex, garantindo segurança e continuidade da operação.",
  },
]

export default function ContatoPage() {
  const faqJsonLd = FAQSchema(faqs, "contato")
  const wp = WebPageSchema("Contato | Demonstração de ERP, CRM e PDV — Webgex", "Solicite uma demonstração gratuita do ERP Webgex com CRM integrado e PDV online.", "/contato")
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 webgex-grid-bg opacity-60" aria-hidden="true" />
          <div className="container relative py-20 text-center lg:py-24">
            <h1 className="mx-auto max-w-3xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-secondary lg:text-5xl">
              Vamos conversar sobre a sua gestão
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Preencha o formulário e nossa equipe entrará em contato para entender a sua necessidade e mostrar o Webgex
              na prática.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-secondary">Canais de atendimento</h2>
                <p className="mt-2 text-muted-foreground">
                  Prefere falar direto com a gente? Use um dos canais abaixo.
                </p>
              </div>
              <ul className="space-y-5">
                {channels.map((c) => (
                  <li key={c.label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm text-muted-foreground">{c.label}</p>
                      <p className="font-semibold text-secondary">{c.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <ContactForm />
          </div>
        </section>

        <section className="border-t border-border bg-muted/40 py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-secondary">Perguntas frequentes</h2>
              <p className="mt-3 text-muted-foreground">Respostas para as dúvidas mais comuns sobre o Webgex.</p>
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-secondary">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}
