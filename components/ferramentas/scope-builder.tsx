"use client"

import { useState, useMemo, useEffect, type FormEvent } from "react"
import {
  MODULES,
  SIZES,
  ADDONS,
  estimateScope,
  formatBRL,
  saveDraft,
  loadDraft,
  clearDraft,
  PDV_PRICE,
  USER_PRICE,
  type ScopeSelection,
} from "@/lib/scope-builder"
import { isAllowedConsultantEmail, normalizeEmail, sendLeadToCRM, sendProposalEmail, redirectToWhatsApp, makeWhatsAppMessage } from "@/lib/form-submit"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Field, FieldLabel } from "@/components/ui/field"
import { Check, Clock, Layers, Sparkles, Mail, User } from "lucide-react"

export function ScopeBuilder() {
  const [moduleIds, setModuleIds] = useState<string[]>([])
  const [sizeId, setSizeId] = useState<string>("")
  const [addOnIds, setAddOnIds] = useState<string[]>([])
  const [pdvCount, setPdvCount] = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [formError, setFormError] = useState("")

  useEffect(() => {
    const draft = loadDraft()
    if (draft) {
      setModuleIds(draft.moduleIds)
      setSizeId(draft.sizeId)
      setAddOnIds(draft.addOnIds)
      setPdvCount(draft.pdvCount)
    }
  }, [])

  const selection: ScopeSelection = useMemo(
    () => ({ moduleIds, sizeId, addOnIds, pdvCount }),
    [moduleIds, sizeId, addOnIds, pdvCount],
  )

  const estimate = useMemo(() => estimateScope(selection), [selection])

  useEffect(() => {
    if (moduleIds.length > 0 || sizeId || addOnIds.length > 0 || pdvCount > 0) {
      saveDraft({ moduleIds, sizeId, addOnIds, pdvCount })
    }
  }, [moduleIds, sizeId, addOnIds, pdvCount])

  const hasSelection = moduleIds.length > 0 && sizeId !== ""

  function toggleModule(id: string) {
    setModuleIds((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id],
    )
  }

  function toggleAddOn(id: string) {
    setAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    )
  }

  function buildProposalMessage(data: Record<string, string>): string {
    const lines = [
      `Olá! Recebi a proposta de escopo Webgex. Seguem os detalhes:\n`,
      `*Empresa:* ${data.empresa || "(não informada)"}`,
      `*Nome:* ${data.nome}`,
      `*Segmento:* ${data.segmento || "Não informado"}\n`,
      `*Módulos selecionados:*`,
    ]
    estimate.modules.forEach((m) => lines.push(`  ✅ ${m.label}`))
    if (estimate.pdvCount > 0) lines.push(`\n*PDVs:* ${estimate.pdvCount} máquina(s)`)
    lines.push(
      `\n*Porte:* ${estimate.size?.label || "Não selecionado"}`,
      ``,
      `*📊 Resumo financeiro:*`,
    )
    estimate.breakdown.forEach((b) => {
      lines.push(`  ${b.label}: ${formatBRL(b.value)}${b.isRecurring ? "/mês" : ""}`)
    })
    lines.push(
      ``,
      `*Total mensal:* ${formatBRL(estimate.monthly)}/mês`,
      `*Implantação:* ${formatBRL(estimate.setup)}`,
      `*Prazo:* ${estimate.timelineWeeks} semanas`,
      ``,
      `Quero agendar uma conversa com um especialista Webgex para detalhar essa proposta.`,
    )
    return lines.join("\n")
  }

  function escapeHtml(str: string): string {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
  }

  function buildEmailBody(data: Record<string, string>): string {
    const s = (v: string | undefined, fallback = "") => escapeHtml(v ?? fallback)
    let body = `
<h2 style="color:#1A4B8C;">Proposta de Escopo Webgex</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif;">
<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Empresa</td><td style="padding:8px;border:1px solid #ddd;">${s(data.empresa, "(não informada)")}</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nome</td><td style="padding:8px;border:1px solid #ddd;">${s(data.nome)}</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">E-mail</td><td style="padding:8px;border:1px solid #ddd;">${s(data.email)}</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefone</td><td style="padding:8px;border:1px solid #ddd;">${s(data.telefone)}</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Segmento</td><td style="padding:8px;border:1px solid #ddd;">${s(data.segmento, "Não informado")}</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Consultor</td><td style="padding:8px;border:1px solid #ddd;">${s(data.consultorEmail, "Não informado")}</td></tr>
</table>
<br/>
<h3 style="color:#1A4B8C;">Módulos Selecionados</h3>
<ul>`
    estimate.modules.forEach((m) => { body += `<li>${m.label}</li>` })
    body += `</ul>`
    if (estimate.pdvCount > 0) body += `<p><strong>PDVs:</strong> ${estimate.pdvCount} máquina(s)</p>`
    body += `
<p><strong>Porte:</strong> ${estimate.size?.label || "Não selecionado"}</p>
<h3 style="color:#1A4B8C;">Resumo Financeiro</h3>
<table style="border-collapse:collapse;width:100%;max-width:400px;font-family:Arial,sans-serif;">`
    estimate.breakdown.forEach((b) => {
      body += `<tr><td style="padding:6px;border:1px solid #ddd;">${b.label}</td><td style="padding:6px;border:1px solid #ddd;text-align:right;">${formatBRL(b.value)}${b.isRecurring ? '/mês' : ''}</td></tr>`
    })
    body += `
<tr style="background:#f0f4ff;"><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Total Mensal</td><td style="padding:8px;border:1px solid #ddd;text-align:right;font-weight:bold;">${formatBRL(estimate.monthly)}/mês</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Implantaçāo</td><td style="padding:8px;border:1px solid #ddd;text-align:right;font-weight:bold;">${formatBRL(estimate.setup)}</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Prazo</td><td style="padding:8px;border:1px solid #ddd;text-align:right;font-weight:bold;">${estimate.timelineWeeks} semanas</td></tr>
</table>
<br/>
<hr style="border:none;border-top:1px solid #ddd;margin:20px 0;"/>
<p style="font-size:13px;color:#333;"><strong>Disponibilidade dos módulos</strong></p>
<p style="font-size:12px;color:#666;">Todos os módulos do Webgex estão sempre disponíveis para sua empresa utilizar, independentemente do que for implantado na primeira fase. Você pode ativar novas áreas conforme sua operação evoluir, sem custo adicional de licenciamento.</p>
<p style="font-size:12px;color:#666;"><strong>Suporte free incluso</strong> em horário comercial para todas as funcionalidades contratadas.</p>
<br/>
<p style="font-size:12px;color:#666;"><strong>Serviços de terceiros (repasses):</strong><br/>
- <strong>TEF:</strong> integração via parceiro Softexpress — valor a consultar conforme volume de transações.<br/>
- <strong>Conciliação bancária:</strong> integração via parceiro Boavista — valor a consultar conforme contas e movimentação.<br/>
- <strong>SMS:</strong> o cliente adquire o pacote de envio diretamente com a operadora.</p>
<br/>
<p style="color:#666;font-size:12px;">Proposta gerada pelo site Webgex. Aguardando contato do consultor para detalhamento.</p>`
    return body
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending) return

    const form = e.currentTarget
    const raw = new FormData(form)
    const data = Object.fromEntries(raw.entries()) as Record<string, string>
    const consultantEmail = normalizeEmail(data.consultorEmail || "")

    setFormError("")

    if (data.website?.trim()) return

    if (!isAllowedConsultantEmail(consultantEmail)) {
      setFormError("Informe um e-mail corporativo da Unigex para o consultor ou deixe o campo em branco.")
      return
    }

    data.email = normalizeEmail(data.email)
    data.consultorEmail = consultantEmail

    const modulesSummary = estimate.modules.map((m) => m.label).join(", ")
    const breakdownSummary = estimate.breakdown
      .map((b) => `${b.label}: ${formatBRL(b.value)}${b.isRecurring ? "/mês" : ""}`)
      .join("\n")

    data.segmento = data.segmento || "outro"
    data.origem = "escopo"
    data.modulos = modulesSummary
    data.mensalidade = String(estimate.monthly)
    data.implantacao = String(estimate.setup)
    data.prazo = `${estimate.timelineWeeks} semanas`
    data.pdvs = String(estimate.pdvCount)
    data.detalhamento = breakdownSummary

    setSending(true)

    await sendLeadToCRM(data)

    const emailHtml = buildEmailBody(data)
    await sendProposalEmail({
      email: data.email,
      subject: `Proposta Webgex - Escopo Personalizado - ${data.nome}`,
      message: emailHtml,
    })

    if (data.consultorEmail) {
      await sendProposalEmail({
        email: data.consultorEmail,
        subject: `Proposta Webgex - Escopo para ${data.empresa || data.nome}`,
        message: emailHtml,
      })
    }

    clearDraft()
    setSent(true)

    const msg = buildProposalMessage(data)
    redirectToWhatsApp(msg)
  }

  function resetAll() {
    setModuleIds([])
    setSizeId("")
    setAddOnIds([])
    setPdvCount(0)
    setShowForm(false)
    setSent(false)
    clearDraft()
  }

  if (sent) {
    return (
      <Card className="mx-auto max-w-2xl border-border/60 shadow-sm">
        <CardContent className="p-10 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
            <Check className="h-8 w-8" />
          </div>
          <h2 className="mt-5 text-2xl font-bold text-secondary">Proposta enviada!</h2>
          <p className="mt-3 text-muted-foreground">
            O resumo da sua proposta foi enviado para seu e-mail e para nossa equipe comercial.
            Você será redirecionado para o WhatsApp para falar com um especialista.
          </p>
          <Button variant="outline" className="mt-6" onClick={resetAll}>
            Montar nova proposta
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
      {/* Configurador */}
      <div className="flex flex-col gap-10">
        {/* Módulos */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-secondary">
              1. Selecione as áreas
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {MODULES.map((module) => {
              const active = moduleIds.includes(module.id)
              return (
                <button
                  key={module.id}
                  type="button"
                  onClick={() => toggleModule(module.id)}
                  className={`rounded-lg border p-4 text-left transition-colors ${
                    active
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50 hover:bg-muted"
                  }`}
                  aria-pressed={active}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-secondary">
                      {module.label}
                    </span>
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                        active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-muted-foreground/40"
                      }`}
                    >
                      {active && <Check className="h-3 w-3" aria-hidden="true" />}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {module.description}
                  </p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Porte */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-secondary">
              2. Porte da operação
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {SIZES.map((size) => {
              const active = sizeId === size.id
              return (
                <button
                  key={size.id}
                  type="button"
                  onClick={() => setSizeId(size.id)}
                  className={`rounded-lg border p-4 text-left transition-colors ${
                    active
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50 hover:bg-muted"
                  }`}
                  aria-pressed={active}
                >
                  <span className="font-medium text-secondary">
                    {size.label}
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {size.description}
                  </p>
                </button>
              )
            })}
          </div>
        </div>

        {/* PDV Count */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-secondary">
              3. Quantidade de PDVs
            </h2>
          </div>
          <p className="mb-3 text-sm text-muted-foreground">
            Quantas máquinas de PDV (frente de caixa) você precisa? ({formatBRL(PDV_PRICE)}/máquina/mês)
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPdvCount(Math.max(0, pdvCount - 1))}
              className="grid h-10 w-10 place-items-center rounded-lg border border-border text-lg font-bold text-secondary hover:bg-muted"
              aria-label="Reduzir PDV"
            >
              -
            </button>
            <span className="min-w-[3rem] text-center text-xl font-bold text-secondary">
              {pdvCount}
            </span>
            <button
              type="button"
              onClick={() => setPdvCount(pdvCount + 1)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-border text-lg font-bold text-secondary hover:bg-muted"
              aria-label="Aumentar PDV"
            >
              +
            </button>
          </div>
        </div>

        {/* Add-ons */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-secondary">
              4. Serviços adicionais
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {ADDONS.map((addon) => (
              <Label
                key={addon.id}
                htmlFor={addon.id}
                className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted"
              >
                <Checkbox
                  id={addon.id}
                  checked={addOnIds.includes(addon.id)}
                  onCheckedChange={() => toggleAddOn(addon.id)}
                  className="mt-0.5"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-secondary">
                      {addon.label}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {addon.id === "armazenamento" || addon.id === "bi" || addon.id === "whatsapp"
                        ? `+ ${formatBRL(addon.price)}/mês`
                        : `+ ${formatBRL(addon.price)}`}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {addon.description}
                  </p>
                </div>
              </Label>
            ))}
          </div>
        </div>

        {/* Observações sobre serviços de terceiros */}
        <div className="rounded-lg border border-border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
          <p className="font-medium text-secondary">Serviços de terceiros — valores a consultar (repasses)</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li><strong>TEF:</strong> integração via parceiro <strong>Softexpress</strong>. Valor depende do volume de transações.</li>
            <li><strong>Conciliação bancária:</strong> integração via parceiro <strong>Boavista</strong>. Valor depende da quantidade de contas e movimentação.</li>
          </ul>
          <p className="mt-3">
            <strong>WhatsApp:</strong> integração oficial por número telefônico (R$ 200/número/mês). Consulte condições com o consultor.
          </p>
          <p className="mt-1">
            <strong>Suporte:</strong> incluso na mensalidade em horário comercial. Suporte adicional com escopo personalizado pode ser orçado à parte.
          </p>
          <p className="mt-1">
            <strong>SMS:</strong> o cliente adquire o pacote de envio diretamente com a operadora.
          </p>
        </div>
      </div>

      {/* Resumo + Formulário */}
      <div className="lg:relative">
        <Card className="border-border/60 shadow-sm lg:sticky lg:top-24">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-secondary">
              Resumo da proposta
            </h2>

            {!hasSelection ? (
              <p className="mt-4 text-sm text-muted-foreground">
                Selecione as áreas e o porte da operação para estimar sua proposta.
              </p>
            ) : (
              <>
                <ul className="mt-4 flex flex-col gap-1.5 text-sm">
                  {estimate.modules.map((m) => (
                    <li
                      key={m.id}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      {m.label}
                    </li>
                  ))}
                  {estimate.pdvCount > 0 && (
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      PDV: {estimate.pdvCount} máquina(s)
                    </li>
                  )}
                </ul>

                {estimate.addOns.length > 0 && (
                  <ul className="mt-3 flex flex-col gap-1.5 border-t border-border/60 pt-3 text-sm">
                    {estimate.addOns.map((a) => (
                      <li
                        key={a.id}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                        {a.label}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 border-t border-border/60 pt-5">
                  {/* Breakdown */}
                  <div className="space-y-1.5 text-sm">
                    {estimate.breakdown.map((b, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-muted-foreground">{b.label}</span>
                        <span className="font-medium text-secondary">
                          {formatBRL(b.value)}
                          {b.isRecurring && <span className="text-xs text-muted-foreground">/mês</span>}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 border-t border-border/60 pt-4">
                    <div className="flex items-end justify-between">
                      <span className="text-sm text-muted-foreground">
                        Mensalidade estimada
                      </span>
                      <span className="text-2xl font-bold text-secondary">
                        {formatBRL(estimate.monthly)}
                        <span className="text-sm font-normal text-muted-foreground">
                          /mês
                        </span>
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Implantação (única)
                      </span>
                      <span className="font-medium text-secondary">
                        {formatBRL(estimate.setup)}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        Prazo estimado
                      </span>
                      <span className="font-medium text-secondary">
                        {estimate.timelineWeeks} semanas
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 p-4 text-xs leading-relaxed text-muted-foreground">
                    <p className="font-medium text-secondary text-xs">Disponibilidade dos módulos</p>
                    <p className="mt-1">
                      Todos os módulos do Webgex estão sempre disponíveis para sua empresa utilizar,
                      independentemente do que for implantado na primeira fase. Você pode ativar
                      novas áreas conforme sua operação evoluir, sem custo adicional de licenciamento.
                    </p>
                    <p className="mt-2">
                      <strong>Suporte free incluso</strong> em horário comercial para todas as funcionalidades contratadas.
                    </p>
                  </div>
                </div>

                {!showForm ? (
                  <Button
                    size="lg"
                    className="mt-6 w-full"
                    onClick={() => setShowForm(true)}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Receber proposta por e-mail
                  </Button>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />
                    <Field>
                      <FieldLabel htmlFor="scope-nome">Nome</FieldLabel>
                      <Input id="scope-nome" name="nome" required maxLength={120} placeholder="Seu nome" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="scope-email">E-mail</FieldLabel>
                      <Input id="scope-email" name="email" type="email" required maxLength={254} placeholder="seu@email.com.br" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="scope-telefone">WhatsApp</FieldLabel>
                      <Input id="scope-telefone" name="telefone" required maxLength={30} placeholder="(00) 00000-0000" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="scope-empresa">Empresa</FieldLabel>
                      <Input id="scope-empresa" name="empresa" maxLength={160} placeholder="Nome da empresa" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="scope-segmento">Segmento</FieldLabel>
                      <select
                        id="scope-segmento"
                        name="segmento"
                        required
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none ring-primary focus:ring-2"
                      >
                        <option value="">Selecione...</option>
                        <option value="varejo">Varejo</option>
                        <option value="atacado">Atacado e distribuição</option>
                        <option value="automotivo">Centro automotivo</option>
                        <option value="moveis">Móveis e decoração</option>
                        <option value="outro">Outro</option>
                      </select>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="scope-consultor" className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                        E-mail do consultor (opcional)
                      </FieldLabel>
                      <Input id="scope-consultor" name="consultorEmail" type="email" maxLength={254} pattern="^[^@\s]+@unigex\.com\.br$" placeholder="consultor@unigex.com.br" />
                    </Field>
                    {formError && (
                      <p className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                        {formError}
                      </p>
                    )}
                    <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700" disabled={sending}>
                      {sending ? "Enviando..." : "Receber proposta por e-mail e WhatsApp"}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      A proposta será enviada para seu e-mail. Após o envio, você será redirecionado para o WhatsApp.
                    </p>
                  </form>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
