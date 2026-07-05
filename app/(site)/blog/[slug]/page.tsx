import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { OG_IMAGE_DEFAULT_ARRAY } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getPost, posts, formatDate } from "@/lib/blog-data"
import { ArticleSchema, BreadcrumbSchema, WebPageSchema } from "@/lib/json-ld"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: "Artigo não encontrado | Webgex" }
  return {
    title: `${post.title} | Blog Webgex`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: OG_IMAGE_DEFAULT_ARRAY,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const articleSchema = ArticleSchema(post)
  const breadcrumbSchema = BreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
        <article>
          <header className="relative overflow-hidden border-b border-border">
            <div className="absolute inset-0 webgex-grid-bg opacity-60" aria-hidden="true" />
            <div className="container relative max-w-3xl py-16 lg:py-20">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="mr-1.5 h-4 w-4" aria-hidden="true" /> Voltar ao blog
              </Link>
              <Badge variant="secondary" className="mt-6">{post.category}</Badge>
              <h1 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight text-secondary lg:text-4xl">
                {post.title}
              </h1>
              <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
                <span>{post.author}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{formatDate(post.date)}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readingTime} de leitura</span>
              </div>
            </div>
          </header>

          <div className="container max-w-3xl py-12 lg:py-16">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              <p className="text-pretty text-xl font-medium text-secondary">{post.excerpt}</p>
              {post.coverImage && (
                <div className="-mx-4 overflow-hidden rounded-xl sm:mx-0">
                  <img src={post.coverImage} alt={post.title} className="w-full object-cover" />
                </div>
              )}
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-pretty">{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-8 text-center">
              <h2 className="text-balance text-xl font-bold text-secondary">
                Quer ver o Webgex na prática?
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                Agende uma demonstração gratuita e descubra como organizar a gestão da sua empresa.
              </p>
              <Button className="mt-5" asChild>
                <Link href="/contato">
                  Falar com especialista <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </article>

        <section className="border-t border-border bg-muted/40 py-16">
          <div className="container">
            <h2 className="text-2xl font-bold tracking-tight text-secondary">Continue lendo</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-[16/10] bg-muted">
                    {p.coverImage ? (
                      <img src={p.coverImage} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                    ) : (
                      <div className="webgex-grid-bg h-full w-full" aria-hidden="true" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <Badge variant="secondary" className="w-fit">{p.category}</Badge>
                    <h3 className="text-balance text-lg font-semibold leading-snug text-secondary">{p.title}</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}
