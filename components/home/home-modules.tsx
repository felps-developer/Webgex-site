import {
  Database,
  Wallet,
  LineChart,
  Truck,
  Users,
  ShieldCheck,
} from "lucide-react"

const modules = [
  {
    icon: Database,
    title: "Cadastros",
    description: "Base única de produtos, clientes e fornecedores com dados sempre consistentes.",
  },
  {
    icon: Wallet,
    title: "Financeiro",
    description: "Contas a pagar e receber, fluxo de caixa e conciliação bancária automatizada.",
  },
  {
    icon: LineChart,
    title: "Controladoria",
    description: "DRE gerencial, centros de custo e indicadores para decisões mais rápidas.",
  },
  {
    icon: Truck,
    title: "Operações",
    description: "Estoque, compras, vendas e logística sincronizados em tempo real.",
  },
  {
    icon: Users,
    title: "CRM",
    description: "Histórico completo de relacionamento, oportunidades e pós-venda.",
  },
  {
    icon: ShieldCheck,
    title: "Fiscal",
    description: "Em dia com a reforma tributária. Compliance fiscal total com apuração automática de impostos e regras sempre atualizadas.",
  },
]

export function HomeModules() {
  return (
    <section className="border-b border-border py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
            Um ERP, todas as áreas
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-secondary lg:text-4xl">
            Módulos que conversam entre si
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Nada de planilhas soltas ou sistemas desconectados. Tudo registrado uma única vez e disponível para toda a
            operação.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <mod.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-secondary">{mod.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mod.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
