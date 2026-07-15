"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { sendLeadToCRM, redirectToWhatsApp, makeWhatsAppMessage, getSegmentCode } from "@/lib/form-submit"

export function LeadForm({ segment }: { segment: string }) {
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const raw = new FormData(form)
    const data = Object.fromEntries(raw.entries()) as Record<string, string>

    if (data.website?.trim()) return

    data.segmento = segment
    data.classe = getSegmentCode(segment)
    data.classeNome = segment

    setSending(true)

    await sendLeadToCRM(data)

    const msg = makeWhatsAppMessage(data)
    redirectToWhatsApp(msg)
  }

  return (
    <form
      className="rounded-2xl border border-border bg-card p-7"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <h3 className="text-lg font-bold text-secondary">Fale com um especialista</h3>
      <p className="mt-1 text-sm text-muted-foreground">Preencha e entraremos em contato.</p>
      <FieldGroup className="mt-5">
        <Field>
          <FieldLabel htmlFor="lead-nome">Nome</FieldLabel>
          <Input id="lead-nome" name="nome" required maxLength={120} placeholder="Seu nome" />
        </Field>
        <Field>
          <FieldLabel htmlFor="lead-empresa">Empresa</FieldLabel>
          <Input id="lead-empresa" name="empresa" maxLength={160} placeholder="Nome da empresa" />
        </Field>
        <Field>
          <FieldLabel htmlFor="lead-email">E-mail</FieldLabel>
          <Input id="lead-email" name="email" type="email" required maxLength={254} placeholder="seu@email.com.br" />
        </Field>
        <Field>
          <FieldLabel htmlFor="lead-telefone">Telefone / WhatsApp</FieldLabel>
          <Input id="lead-telefone" name="telefone" required maxLength={30} placeholder="(00) 00000-0000" />
        </Field>
        <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700" disabled={sending}>
          {sending ? (
            "Redirecionando..."
          ) : (
            <>
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Falar com especialista
            </>
          )}
        </Button>
        <p className="text-center text-xs text-muted-foreground">Você será redirecionado para o WhatsApp. Sem compromisso.</p>
      </FieldGroup>
    </form>
  )
}
