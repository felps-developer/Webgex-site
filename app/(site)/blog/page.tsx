import type { Metadata } from "next"
import { OG_IMAGE_DEFAULT_ARRAY } from "@/lib/utils"
import { WebPageSchema } from "@/lib/json-ld"
import dynamic from "next/dynamic"

const BlogList = dynamic(() => import("@/components/blog/blog-list").then((m) => ({ default: m.BlogList })))

export const metadata: Metadata = {
  title: "Blog | Artigos sobre ERP, CRM, PDV e gestão empresarial",
  description:
    "Artigos sobre ERP, CRM, PDV, gestão financeira, controle de estoque, legislação fiscal e tecnologia para varejo, atacado e centros automotivos. Conteúdo Webgex.",
    openGraph: {
    title: "Blog Webgex | ERP, CRM, PDV e gestão empresarial",
    description:
      "Artigos sobre gestão empresarial, ERP, CRM, PDV, controle de estoque e finanças para sua empresa.",
    images: OG_IMAGE_DEFAULT_ARRAY,
  },
}

export default function BlogPage() {
  const wp = WebPageSchema("Blog | Artigos sobre ERP, CRM, PDV e gestão empresarial", "Artigos sobre ERP, CRM, PDV, gestão financeira, controle de estoque, legislação fiscal e tecnologia para varejo, atacado e centros automotivos.", "/blog")
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wp) }} />
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 webgex-grid-bg opacity-60" aria-hidden="true" />
          <div className="container relative py-20 lg:py-24">
            <p className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">Blog e notícias</p>
            <h1 className="mt-3 max-w-3xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-secondary lg:text-5xl">
              Conhecimento para crescer com gestão
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Artigos, guias e novidades sobre gestão, tecnologia e legislação para a sua empresa ir mais longe.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container">
            <BlogList />
          </div>
        </section>
    </>
  )
}
