import Link from "next/link"
import { SiteLogo } from "@/components/site-logo"
import { AnniversaryBadge } from "@/components/anniversary-badge"

const footerNav = [
  {
    title: "Produto",
    links: [
      { label: "Módulos do ERP", href: "/produto" },
      { label: "Planos e preços", href: "/planos" },
      { label: "Avaliação de maturidade", href: "/maturidade" },
      { label: "Montar proposta", href: "/contato" },
    ],
  },
  {
    title: "Soluções",
    links: [
      { label: "Varejo", href: "/campanha/varejo" },
      { label: "Atacado e distribuição", href: "/campanha/distribuicao" },
      { label: "Centros automotivos", href: "/campanha/automotivo" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre os 30 anos", href: "/sobre" },
      { label: "Blog e notícias", href: "/blog" },
      { label: "Contato", href: "/contato" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div className="space-y-5">
            <SiteLogo variant="light" />
            <p className="max-w-sm text-sm leading-relaxed text-secondary-foreground/70">
              Há três décadas desenvolvendo o ERP que integra todas as áreas do seu negócio. Tecnologia sólida, suporte
              próximo e evolução constante.
            </p>
            <AnniversaryBadge className="border-accent/40 bg-accent/15" />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title} className="space-y-4">
                <h4 className="text-sm font-semibold">{col.title}</h4>
                <ul className="space-y-2.5" aria-label={col.title}>
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-secondary-foreground/15 pt-8 text-sm text-secondary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Webgex — Grupo UNIGEX. Todos os direitos reservados.</p>
          <p>helpdesk@unigex.com.br &middot; (85) 99802-0016</p>
        </div>
      </div>
    </footer>
  )
}
