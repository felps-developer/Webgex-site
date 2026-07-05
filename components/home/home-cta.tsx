import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HomeCta() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-secondary px-8 py-16 text-secondary-foreground lg:px-16">
          <div className="absolute inset-0 webgex-grid-bg opacity-10" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight lg:text-4xl">
              Pronto para uma gestão sem retrabalho?
            </h2>
            <p className="mt-4 text-pretty text-lg text-secondary-foreground/75">
              Receba um diagnóstico gratuito da sua operação e veja na prática como o Webgex pode simplificar o seu dia a
              dia.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contato">
                  Agendar demonstração <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground/30 bg-transparent text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
                asChild
              >
                <Link href="/contato">Montar uma proposta</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
