"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { posts, categories, formatDate } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { sendLeadToCRM } from "@/lib/form-submit"

const PER_PAGE = 9

export function BlogList() {
  const [active, setActive] = useState<string>("Todos")
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const list = active === "Todos" ? [...posts] : posts.filter((p) => p.category === active)
    return list.sort((a, b) => b.date.localeCompare(a.date))
  }, [active])

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const safePage = Math.min(page, Math.max(totalPages, 1))
  const start = (safePage - 1) * PER_PAGE
  const pagePosts = filtered.slice(start, start + PER_PAGE)
  const [featured, ...rest] = pagePosts

  function goTo(p: number) {
    setPage(p)
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActive(cat); setPage(1) }}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              active === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {safePage === 1 && featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl lg:grid-cols-2"
        >
          <div className="aspect-[16/10] bg-muted lg:aspect-auto">
            {featured.coverImage ? (
              <img src={featured.coverImage} alt={featured.title} className="h-full w-full object-cover" />
            ) : (
              <div className="webgex-grid-bg h-full w-full" aria-hidden="true" />
            )}
          </div>
          <div className="flex flex-col justify-center gap-4 p-8 lg:p-10">
            <Badge variant="secondary" className="w-fit">{featured.category}</Badge>
            <h2 className="text-balance text-2xl font-bold tracking-tight text-secondary lg:text-3xl">
              {featured.title}
            </h2>
            <p className="text-pretty text-muted-foreground">{featured.excerpt}</p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>{formatDate(featured.date)}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{featured.readingTime} de leitura</span>
            </div>
            <span className="mt-2 inline-flex items-center font-semibold text-primary">
              Ler artigo <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </div>
        </Link>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[16/10] bg-muted">
              {post.coverImage ? (
                <img src={post.coverImage} alt={post.title} loading="lazy" className="h-full w-full object-cover" />
              ) : (
                <div className="webgex-grid-bg h-full w-full" aria-hidden="true" />
              )}
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <Badge variant="secondary" className="w-fit">{post.category}</Badge>
              <h3 className="text-balance text-lg font-semibold leading-snug text-secondary">{post.title}</h3>
              <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="mt-auto flex items-center gap-2 pt-2 text-xs text-muted-foreground">
                <span>{formatDate(post.date)}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="flex items-center justify-center gap-2" aria-label="Navegação do blog">
          <button
            onClick={() => goTo(safePage - 1)}
            disabled={safePage === 1}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Página anterior"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => goTo(p)}
              className={cn(
                "grid h-10 w-10 place-items-center rounded-lg border text-sm font-medium transition-colors",
                p === safePage
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
              aria-label={`Página ${p}`}
              aria-current={p === safePage ? "page" : undefined}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => goTo(safePage + 1)}
            disabled={safePage === totalPages}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Próxima página"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </nav>
      )}

      <div className="rounded-2xl border border-border bg-muted/40 p-8 text-center lg:p-12">
        <h3 className="text-balance text-2xl font-bold tracking-tight text-secondary">
          Receba conteúdos de gestão no seu e-mail
        </h3>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">
          Assine nossa newsletter e fique por dentro das novidades em gestão, tecnologia e legislação.
        </p>
        <form
          className="mx-auto mt-6 flex max-w-md flex-col gap-3"
          onSubmit={async (e) => {
            e.preventDefault()
            const form = e.currentTarget
            const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>
            if (data.website?.trim()) return
            data.origem = "newsletter"
            await sendLeadToCRM(data)
            form.reset()
            alert("Inscrição confirmada! Verifique seu e-mail.")
          }}
        >
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <input
            type="text"
            name="nome"
            required
            maxLength={120}
            placeholder="Seu nome"
            aria-label="Seu nome"
            className="rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none ring-primary focus:ring-2"
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              name="email"
              required
              maxLength={254}
              placeholder="seu@email.com.br"
              aria-label="Seu e-mail"
              className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none ring-primary focus:ring-2"
            />
            <input
              type="tel"
              name="telefone"
              required
              maxLength={30}
              placeholder="(00) 00000-0000"
              aria-label="Seu telefone"
              className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none ring-primary focus:ring-2"
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <select
              name="segmento"
              required
              aria-label="Segmento da empresa"
              className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none ring-primary focus:ring-2"
            >
              <option value="">Selecione o segmento</option>
              <option value="varejo">Varejo</option>
              <option value="atacado">Atacado e distribuição</option>
              <option value="automotivo">Centro automotivo</option>
              <option value="outro">Outro</option>
            </select>
            <input
              type="text"
              name="empresa"
              maxLength={160}
              placeholder="Sua empresa (opcional)"
              aria-label="Sua empresa"
              className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none ring-primary focus:ring-2"
            />
            <Button type="submit">Assinar</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
