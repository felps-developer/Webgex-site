import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnniversaryBadge } from "@/components/anniversary-badge"
import { ArrowRight } from "lucide-react"

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 webgex-grid-bg opacity-60" aria-hidden="true" />
      <div className="absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="absolute -bottom-40 -left-40 h-[40rem] w-[40rem] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="container relative py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <AnniversaryBadge />
            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-secondary sm:text-5xl lg:text-6xl">
              O ERP que organiza a sua empresa há{" "}
              <span className="text-primary">30 anos</span>
            </h1>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Do cadastro à controladoria, o Webgex integra financeiro, operações e relacionamento com o cliente em uma
              única plataforma. Gestão completa para varejo, atacado e centros automotivos.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contato">
                  Falar com especialista <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/maturidade">Avaliar minha gestão</Link>
              </Button>
            </div>
            <dl className="flex flex-wrap gap-x-10 gap-y-4 pt-4">
              {[
                { value: "30 anos", label: "de mercado" },
                { value: "+2.500", label: "usuários ativos" },
                { value: "1 sistema", label: "completo e integrado" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-bold text-secondary">{stat.value}</dt>
                  <dd className="text-sm text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-secondary/10">
              <Image
                src="/erp-dashboard.png"
                alt="Painel do ERP Webgex com indicadores financeiros e de vendas"
                width={900}
                height={680}
                className="h-auto w-full"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card p-4 shadow-lg sm:block">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Uptime</p>
              <p className="text-xl font-bold text-primary">99,9%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
