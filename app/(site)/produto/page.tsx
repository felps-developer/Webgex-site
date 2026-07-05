import type { Metadata } from "next"
import { OG_IMAGE_DEFAULT_ARRAY } from "@/lib/utils"
import { WebPageSchema } from "@/lib/json-ld"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  Database,
  Wallet,
  LineChart,
  Truck,
  Users,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "ERP Completo | Financeiro, CRM, PDV, Estoque e Fiscal | Webgex",
  description:
    "Conheça o ERP Webgex: sistema completo com finanças, controladoria, operações, CRM integrado e fiscal. Tudo em uma plataforma única para varejo, atacado e centros automotivos.",
  openGraph: {
    title: "ERP Completo Webgex | CRM, PDV, Financeiro e Fiscal",
    description:
      "Plataforma integral de gestão: finanças, controladoria, operações, CRM e fiscal. Conheça o ERP Webgex.",
    images: OG_IMAGE_DEFAULT_ARRAY,
  },
}

const areas = [
  {
    icon: Database,
    title: "Cadastros",
    description: "Base única e confiável para todo o sistema.",
    features: ["Produtos e serviços", "Clientes e fornecedores", "Tabelas e categorias"],
  },
  {
    icon: Wallet,
    title: "Financeiro",
    description: "Controle total do dinheiro que entra e sai.",
    features: ["Contas a pagar e receber", "Fluxo de caixa", "Conciliação bancária"],
  },
  {
    icon: LineChart,
    title: "Controladoria",
    description: "Visão gerencial para decisões estratégicas.",
    features: ["DRE gerencial", "Centros de custo", "Indicadores e metas"],
  },
  {
    icon: Truck,
    title: "Operações",
    description: "Compras, vendas e estoque sincronizados.",
    features: ["Gestão de estoque", "Pedidos e faturamento", "Logística e entregas"],
  },
  {
    icon: Users,
    title: "CRM de Vendas",
    description: "Relacionamento que gera mais vendas.",
    features: ["Funil de oportunidades", "Histórico do cliente", "Pós-venda e suporte"],
  },
  {
    icon: ShieldCheck,
    title: "Fiscal",
    description: "Conformidade com a reforma tributária. Compliance garantido.",
    features: ["Emissão de NF-e / NFC-e", "Apuração de impostos", "Obrigações acessórias", "Atualizado com a reforma tributária"],
  },
]

export default function ProdutoPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ERP Webgex — Gestão Empresarial",
    description: "ERP completo com finanças, controladoria, operações, CRM integrado e fiscal. Tudo em uma plataforma única.",
    brand: { "@type": "Brand", name: "Webgex — UNIGEX Tecnologia" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      offerCount: "3",
      offers: [
        { "@type": "Offer", name: "ERP Webgex", price: "175", priceCurrency: "BRL" },
        { "@type": "Offer", name: "PDV Webgex", price: "175", priceCurrency: "BRL" },
        { "@type": "Offer", name: "Armazenamento 50GB", price: "100", priceCurrency: "BRL" },
      ],
    },
  }
  const webPageSchema = WebPageSchema("ERP Completo | Financeiro, CRM, PDV, Estoque e Fiscal | Webgex", "Conheça o ERP Webgex: sistema completo com finanças, controladoria, operações, CRM integrado e fiscal.", "/produto")
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 webgex-grid-bg opacity-60" aria-hidden="true" />
          <div className="container relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
            <div className="space-y-6">
              <p className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">O ERP Webgex</p>
              <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-secondary lg:text-5xl">
                Uma plataforma completa para gerir todo o negócio
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                O Webgex é um sistema integral — você contrata uma plataforma única com todas as funcionalidades e escolhe
                o que usar na sua operação. Sem módulos separados, sem surpresas.
              </p>
              <Button size="lg" asChild>
                <Link href="/contato">
                  Agendar demonstração <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-secondary/10">
              <Image
                src="/erp-calculotributos.png"
                alt="Interface do ERP Webgex"
                width={900}
                height={680}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary">
              Áreas do sistema
            </p>
            <h2 className="mt-2 text-center text-balance text-3xl font-bold tracking-tight text-secondary lg:text-4xl">
              Tudo o que sua empresa precisa em um só ERP
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <div key={area.title} className="flex flex-col rounded-2xl border border-border bg-card p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <area.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-secondary">{area.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{area.description}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                    {area.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-secondary">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-muted/40 py-20 lg:py-28">
          <div className="container flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-secondary lg:text-4xl">
              Quer saber qual configuração é ideal para você?
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/planos">Ver planos e preços</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/maturidade">Avaliar minha maturidade</Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  )
}
