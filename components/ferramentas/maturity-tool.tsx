"use client"

import { useState, useEffect, type FormEvent } from "react"
import {
  QUESTIONS,
  SCALE,
  DIMENSIONS,
  calculateResult,
  type Answers,
} from "@/lib/maturity-assessment"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts"
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, Copy, TrendingUp } from "lucide-react"
import { sendLeadToCRM, redirectToWhatsApp, makeWhatsAppMessage } from "@/lib/form-submit"

type Stage = "intro" | "quiz" | "result" | "lead"

const STORAGE_KEY = "webgex-maturity-history"

type HistoryEntry = {
  date: string
  overall: number
  levelName: string
}

function getHistory(): HistoryEntry | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function saveHistory(entry: HistoryEntry) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entry))
  } catch {}
}

export function MaturityTool() {
  const [stage, setStage] = useState<Stage>("intro")
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [result, setResult] = useState<{
    overall: number
    level: { name: string; summary: string; recommendation: string }
    dimensions: { dimension: { id: string; label: string }; score: number }[]
  } | null>(null)
  const [sending, setSending] = useState(false)
  const [copied, setCopied] = useState(false)
  const [previous, setPrevious] = useState<HistoryEntry | null>(null)

  useEffect(() => {
    setPrevious(getHistory())
  }, [])

  const question = QUESTIONS[current]
  const progress = Math.round((current / QUESTIONS.length) * 100)
  const isLast = current === QUESTIONS.length - 1
  const selected = question ? answers[question.id] : undefined

  const worstDimension = result
    ? [...result.dimensions].sort((a, b) => a.score - b.score)[0]
    : null

  function selectOption(value: number) {
    setAnswers((prev) => ({ ...prev, [question.id]: value }))
  }

  function next() {
    if (isLast) {
      const r = calculateResult(answers)
      setResult(r)
      saveHistory({ date: new Date().toISOString(), overall: r.overall, levelName: r.level.name })
      setStage("result")
    } else {
      setCurrent((c) => c + 1)
    }
  }

  function restart() {
    setStage("intro")
    setCurrent(0)
    setAnswers({})
    setResult(null)
  }

  async function copyResult() {
    if (!result) return
    const text = `📊 Minha maturidade digital é **${result.level.name}** (${result.overall}/100).\n\nFaça o teste gratuito e descubra o nível da sua empresa:\nhttps://www.webgex.com.br/maturidade`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {}
  }

  async function handleLeadSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const raw = new FormData(form)
    const data = Object.fromEntries(raw.entries()) as Record<string, string>
    data.score = String(result?.overall || 0)
    data.maturidade = result?.level.name || ""
    data.segmento = data.segmento || "outro"

    setSending(true)
    await sendLeadToCRM(data)

    const msg = makeWhatsAppMessage(data)
    redirectToWhatsApp(msg)
  }

  if (stage === "intro") {
    return (
      <Card className="mx-auto max-w-2xl border-border/60 shadow-sm">
        <CardContent className="p-8 md:p-10">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            10 perguntas | 5 dimensões
          </span>
          <h2 className="mt-4 text-2xl font-bold text-secondary text-balance">
            Descubra o nível de maturidade digital da sua empresa
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Responda 10 perguntas rápidas sobre seus processos, finanças, dados,
            integração e relacionamento com clientes. Ao final, você recebe um
            diagnóstico por dimensão e recomendações práticas baseadas nos 30
            anos de experiência da Webgex.
          </p>
          {previous && (
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/5 px-4 py-3 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-accent" aria-hidden="true" />
              Última avaliação: <strong className="text-secondary">{previous.levelName}</strong> ({previous.overall}/100) em{" "}
              {new Date(previous.date).toLocaleDateString("pt-BR")}
            </div>
          )}
          <Button size="lg" className="mt-8" onClick={() => setStage("quiz")}>
            Iniciar avaliação
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (stage === "quiz") {
    return (
      <Card className="mx-auto max-w-2xl border-border/60 shadow-sm">
        <CardContent className="p-8 md:p-10">
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
              <span>
                Pergunta {current + 1} de {QUESTIONS.length}
              </span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <h2 className="text-xl font-semibold text-secondary text-balance">
            {question.text}
          </h2>

          <div className="mt-6 flex flex-col gap-3">
            {SCALE.map((option) => {
              const active = selected === option.value
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectOption(option.value)}
                  className={`flex items-center justify-between rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                    active
                      ? "border-primary bg-primary/5 text-secondary"
                      : "border-border hover:border-primary/50 hover:bg-muted"
                  }`}
                  aria-pressed={active}
                >
                  <span>{option.label}</span>
                  {active && <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />}
                </button>
              )
            })}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Voltar
            </Button>
            <Button onClick={next} disabled={selected === undefined}>
              {isLast ? "Ver resultado" : "Próxima"}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // result
  const chartData =
    result?.dimensions.map((d) => ({
      dimension: d.dimension.label.split(" ")[0],
      score: d.score,
    })) ?? []

  const evolution =
    previous && result
      ? result.overall - previous.overall
      : null

  const isLowScore = (result?.overall ?? 100) < 65

  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_400px]">
      <Card className="border-border/60 shadow-sm">
        <CardContent className="p-8 md:p-10">
          <div className="flex flex-col items-center text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Seu nível de maturidade
            </span>
            <div className="mt-2 flex items-baseline gap-3">
              <span className="text-6xl font-bold text-secondary">
                {result?.overall}
                <span className="text-2xl text-muted-foreground">/100</span>
              </span>
              {evolution !== null && evolution !== 0 && (
                <span
                  className={`flex items-center gap-1 text-sm font-semibold ${
                    evolution > 0 ? "text-green-600" : "text-destructive"
                  }`}
                >
                  <TrendingUp
                    className={`h-4 w-4 ${evolution < 0 ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                  {evolution > 0 ? "+" : ""}
                  {evolution}
                </span>
              )}
            </div>
            <h2 className="mt-2 text-2xl font-bold text-secondary">
              {result?.level.name}
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
              {result?.level.summary}
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="h-64" aria-hidden="true">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={chartData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis
                    dataKey="dimension"
                    tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                  />
                  <Radar
                    dataKey="score"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-col gap-3">
              {result?.dimensions.map((d) => (
                <div key={d.dimension.id}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium text-secondary">
                      {d.dimension.label}
                    </span>
                    <span className="text-muted-foreground">{d.score}%</span>
                  </div>
                  <Progress value={d.score} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-accent/30 bg-accent/5 p-5">
            <h3 className="font-semibold text-secondary">
              Recomendação da Webgex
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {result?.level.recommendation}
            </p>

            {worstDimension && worstDimension.score < 60 && (
              <div className="mt-4 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                <p className="text-sm font-medium text-destructive">
                  Atenção especial: {worstDimension.dimension.label}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Essa foi sua dimensão com menor pontuação ({worstDimension.score}/100). É o maior
                  gargalo da sua operação hoje — e onde o Webgex pode gerar mais resultado rápido.
                  Que tal uma conversa rápida para mostrar como resolver exatamente esse ponto?
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={() => setStage("lead")}
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Falar com especialista
            </Button>
            <Button
              variant="outline"
              onClick={copyResult}
              className="flex-1 bg-transparent"
            >
              <Copy className="mr-2 h-4 w-4" aria-hidden="true" />
              {copied ? "Copiado!" : "Copiar resultado"}
            </Button>
            <Button
              variant="outline"
              onClick={restart}
              className="flex-1 bg-transparent"
            >
              <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
              Refazer
            </Button>
          </div>
        </CardContent>
      </Card>

      {stage === "lead" && (
        <Card className="h-fit border-border/60 shadow-sm lg:sticky lg:top-24">
          <CardContent className="p-8">
            {isLowScore ? (
              <>
                <h3 className="text-lg font-bold text-secondary">
                  Checklist gratuito: 5 passos para sair do caos da planilha
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Deixe seus dados para receber o checklist personalizado com seu diagnóstico e as
                  ações prioritárias para sua empresa.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-lg font-bold text-secondary">
                  Receba seu diagnóstico completo
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Sua gestão já está em bom nível. Que tal uma demonstração gratuita para
                  conhecer as funcionalidades que vão levar sua empresa ao próximo patamar?
                </p>
              </>
            )}
            <form onSubmit={handleLeadSubmit} className="mt-6 space-y-4">
              <Field>
                <FieldLabel htmlFor="mat-nome">Nome</FieldLabel>
                <Input id="mat-nome" name="nome" required placeholder="Seu nome" />
              </Field>
              <Field>
                <FieldLabel htmlFor="mat-empresa">Empresa</FieldLabel>
                <Input id="mat-empresa" name="empresa" placeholder="Nome da empresa" />
              </Field>
              <Field>
                <FieldLabel htmlFor="mat-email">E-mail</FieldLabel>
                <Input id="mat-email" name="email" type="email" required placeholder="seu@email.com.br" />
              </Field>
              <Field>
                <FieldLabel htmlFor="mat-telefone">WhatsApp</FieldLabel>
                <Input id="mat-telefone" name="telefone" required placeholder="(00) 00000-0000" />
              </Field>
              <Field>
                <FieldLabel htmlFor="mat-segmento">Segmento</FieldLabel>
                <select
                  id="mat-segmento"
                  name="segmento"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none ring-primary focus:ring-2"
                >
                  <option value="">Selecione...</option>
                  <option value="varejo">Varejo</option>
                  <option value="atacado">Atacado e distribuição</option>
                  <option value="automotivo">Centro automotivo</option>
                  <option value="outro">Outro</option>
                </select>
              </Field>
              <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700" disabled={sending}>
                {sending
                  ? "Redirecionando..."
                  : isLowScore
                    ? "Quero o checklist gratuito"
                    : "Agendar demonstração"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                {isLowScore
                  ? "Checklist enviado pelo WhatsApp. Sem compromisso."
                  : "Demonstração gratuita. Sem compromisso."}
              </p>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
