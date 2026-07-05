"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "Estamos percebendo uma mudança no padrão de consumo global, demandando que empresas, incluindo varejo e serviços, personalizem seus produtos como se fossem feitos sob medida, atendendo às expectativas dos clientes. Nesse contexto, a solução de backoffice da empresa UNIGEX se destaca, proporcionando uma abordagem personalizada e eficiente para atender às diversas necessidades da empresa, desde a ponta do cliente até aspectos de logística, marketing e compras. A capacidade da UNIGEX em adaptar-se e atender com maestria à diversidade das empresas é um ponto-chave.",
    author: "Ibyte",
    role: "",
    initials: "Ib",
  },
  {
    quote:
      "Empresa com 40 anos de atuação em Fortaleza e 19 lojas, destaca sua parceria de quase um ano com a equipe de desenvolvimento. Eles foram pioneiros no teste do sistema Webgex, cujo desenvolvimento conjunto resultou em uma experiência satisfatória, com atenção constante às demandas da empresa. A segurança do sistema na nuvem do Google e a eficácia do Business Intelligence são aspectos ressaltados, evidenciando a seriedade e competência da equipe.",
    author: "Thiago Barroso",
    role: "TrokService",
    initials: "TB",
  },
  {
    quote:
      "A parceria de mais de dois anos tem sido altamente proveitosa, destacando-se a personalização e eficiência do sistema web oferecido pelo parceiro. A capacidade de customização trouxe desafios e soluções que agregaram valor aos nossos processos, resultando em uma recomendação positiva pela eficácia, fácil utilização e integração total. Além disso, a automação permitiu uma emissão rápida de centenas de notas fiscais por minuto, demonstrando a eficiência do sistema e o bom custo-benefício.",
    author: "Taygro Menezes",
    role: "Gocase",
    initials: "TM",
  },
  {
    quote:
      "Destaco a longevidade dessa parceria desde 2002, proporcionando segurança de informação vital. A UNIGEX, com seus sistemas Minimal e Webgex, com suporte, lógica de marca, segurança e adaptabilidade tecnológica, atendeu plenamente nossas necessidades, conferindo credibilidade aos seus sistemas. Como cliente, recomendo para empresas do setor automotivo.",
    author: "Beto's Car",
    role: "",
    initials: "BC",
  },
]

const partners = [
  { name: "Cappta", logo: "/parceiros/cappta.png", url: "https://cappta.com.br/" },
  { name: "Software Express", logo: "/parceiros/software-express.png", url: "https://www.softwareexpress.com.br/" },
  { name: "Índice Consultoria", logo: "/parceiros/indice.png", url: "https://www.indiceconsultoria.com.br/" },
  { name: "Boavista", logo: "/parceiros/boavista.png", url: "https://boavistatecnologia.com.br/" },
]

export function HomeProof() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]

  return (
    <>
      <section className="border-b border-border py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
              Confiado por quem produz
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-secondary lg:text-4xl">
              Quem usa o Webgex recomenda
            </h2>
          </div>

          <div className="relative mx-auto mt-12 max-w-2xl">
            <div className="rounded-3xl border border-border bg-card p-8 lg:p-10">
              <Quote className="h-10 w-10 text-accent" aria-hidden="true" />
              <blockquote
                key={current}
                className="mt-5 min-h-[6rem] text-xl font-medium leading-relaxed text-secondary transition-opacity"
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 font-bold text-primary">
                  {t.initials}
                </span>
                <div>
                  <p className="font-semibold text-secondary">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </footer>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={cn(
                      "h-2 w-2 rounded-full transition-all",
                      i === current ? "w-6 bg-primary" : "bg-border hover:bg-muted-foreground/30",
                    )}
                    aria-label={`Depoimento ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 lg:py-20">
        <div className="container">
          <p className="text-center font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Parceiros de negócios
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-20 items-center rounded-lg border border-border bg-card px-10 transition-colors hover:bg-muted"
              >
                <Image
                  src={p.logo}
                  alt={`Logo ${p.name}`}
                  width={160}
                  height={52}
                  className="h-14 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
