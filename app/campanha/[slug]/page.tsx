import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { OG_IMAGE_DEFAULT_ARRAY } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { SiteLogo } from "@/components/site-logo"
import { LeadForm } from "@/components/campanha/lead-form"
import { campaigns, getCampaign } from "@/lib/campaigns"
import { ProductSchema, BreadcrumbSchema } from "@/lib/json-ld"
import { CheckCircle2, XCircle, ArrowRight, Phone } from "lucide-react"

export function generateStaticParams() {
  return campaigns.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const campaign = getCampaign(slug)
  if (!campaign) return { title: "Campanha não encontrada | Webgex" }
  return {
    title: `ERP, CRM e PDV para ${campaign.segment} | Webgex`,
    description: `${campaign.subheadline} ERP completo com CRM integrado e PDV para ${campaign.segment.toLowerCase()}. Solicite uma demonstração gratuita.`,
    openGraph: {
      title: `ERP, CRM e PDV para ${campaign.segment} | Webgex`,
      description: campaign.subheadline,
      type: "website",
      images: OG_IMAGE_DEFAULT_ARRAY,
    },
  }
}

export default async function CampanhaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const campaign = getCampaign(slug)
  if (!campaign) notFound()

  const Icon = campaign.icon
  const productSchema = ProductSchema({
    segment: campaign.segment,
    headline: campaign.headline,
    description: campaign.subheadline,
    slug: campaign.slug,
  })
  const breadcrumbSchema = BreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: campaign.segment, url: `/campanha/${campaign.slug}` },
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <script
        dangerouslySetInnerHTML={{
          __html: `dataLayer.push({'pageType': 'campanha', 'campanhaSlug': '${campaign.slug}', 'campanhaSegmento': '${campaign.segment}'});`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header minimalista de conversão */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <SiteLogo />
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden border-primary/40 text-primary sm:inline-flex" asChild>
              <Link href="https://erp3.webgex.com.br/" target="_blank" rel="noopener noreferrer">
                Acessar ERP
              </Link>
            </Button>
            <Button asChild>
              <Link href="#formulario">
                <Phone className="mr-2 h-4 w-4" /> Falar agora
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 webgex-grid-bg opacity-60" aria-hidden="true" />
          <div className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="container relative grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                <Icon className="h-3.5 w-3.5" /> {campaign.eyebrow}
              </span>
              <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-secondary lg:text-5xl">
                {campaign.headline}
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{campaign.subheadline}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="#formulario">
                    Quero parar de perder dinheiro <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <dl className="flex flex-wrap gap-x-8 gap-y-3 pt-4">
                {campaign.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="text-2xl font-extrabold text-secondary">{s.value}</dd>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </dl>
            </div>
            <div id="formulario" className="scroll-mt-24">
              <LeadForm segment={campaign.segment} />
            </div>
          </div>
        </section>

        {/* Dores */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <span className="font-mono text-sm font-semibold uppercase tracking-wider text-destructive">
                Isso parece familiar?
              </span>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-secondary">
                Se você reconhece pelo menos 3 destes problemas, está perdendo dinheiro agora
              </h2>
              <p className="mt-3 text-muted-foreground">
                Você não está sozinho. São os gargalos mais comuns do setor — e o Webgex foi construído para resolvê-los um por um.
              </p>
            </div>
            <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
              {campaign.pains.map((pain) => (
                <li key={pain} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <span className="text-sm text-secondary">{pain}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Benefícios */}
        <section className="border-t border-border bg-muted/40 py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">A solução</p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-secondary">
                Como o Webgex resolve isso
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {campaign.benefits.map((b) => (
                <div key={b.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prova social */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <figure className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center lg:p-12">
              <blockquote className="text-balance text-xl font-medium leading-relaxed text-secondary lg:text-2xl">
                {`"${campaign.testimonial.quote}"`}
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold text-secondary">{campaign.testimonial.author}</span>
                <span className="text-muted-foreground"> — {campaign.testimonial.role}</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Oferta */}
        <section className="border-t border-border bg-secondary py-16 text-secondary-foreground lg:py-20">
          <div className="container grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <h2 className="text-balance text-3xl font-bold tracking-tight lg:text-4xl">{campaign.offer.title}</h2>
              <p className="text-pretty leading-relaxed text-secondary-foreground/80">{campaign.offer.description}</p>
              <ul className="space-y-3">
                {campaign.offer.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-secondary-foreground/15 bg-secondary-foreground/5 p-8">
              <p className="text-lg font-medium">Pronto para organizar a sua gestão?</p>
              <div className="overflow-hidden rounded-xl border border-secondary-foreground/15">
                <Image
                  src={campaign.heroImage || "/erp-calculotributos.png"}
                  alt={`ERP Webgex para ${campaign.segment}`}
                  width={520}
                  height={360}
                  className="h-auto w-full"
                />
              </div>
              <Button size="lg" variant="secondary" className="w-full bg-background text-foreground hover:bg-background/90" asChild>
                <Link href="#formulario">
                  Quero falar com um especialista <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20">
          <div className="container">
            <h2 className="text-center text-3xl font-bold tracking-tight text-secondary">Dúvidas frequentes</h2>
            <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
              {campaign.faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-secondary">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer minimalista */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <SiteLogo />
          <p>© {new Date().getFullYear()} Webgex. 30 anos organizando a gestão de empresas.</p>
        </div>
      </footer>
    </div>
  )
}
