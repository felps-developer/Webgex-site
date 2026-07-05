import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Store, Warehouse, Wrench } from "lucide-react"

const segments = [
  {
    icon: Store,
    title: "Varejo",
    description: "PDV ágil, gestão de estoque por loja e fidelização de clientes para lojas de qualquer porte.",
    href: "/campanha/varejo",
  },
  {
    icon: Warehouse,
    title: "Atacado e distribuição",
    description: "Tabelas de preço, força de vendas e logística de entrega para operações de alto volume.",
    href: "/campanha/distribuicao",
  },
  {
    icon: Wrench,
    title: "Centros automotivos",
    description: "Ordens de serviço, controle de peças e agenda integrada para oficinas e autopeças.",
    href: "/campanha/automotivo",
  },
]

export function HomeSegments() {
  return (
    <section className="border-b border-border bg-muted/40 py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">Feito para o seu setor</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-secondary lg:text-4xl">
              Soluções por segmento
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="/produto">Ver todos os recursos</Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {segments.map((seg) => (
            <Link
              key={seg.title}
              href={seg.href}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                <seg.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 flex items-center justify-between text-xl font-semibold text-secondary">
                {seg.title}
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{seg.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
