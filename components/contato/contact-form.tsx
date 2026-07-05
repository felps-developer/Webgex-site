"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"
import { sendLeadToCRM, makeWhatsAppMessage, redirectToWhatsApp } from "@/lib/form-submit"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>

    await sendLeadToCRM(data)

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-secondary">Mensagem enviada!</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Obrigado pelo contato. Nossa equipe vai retornar em até um dia útil.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Prefere falar agora?{" "}
          <button
            type="button"
            onClick={() => {
              const nome = (document.getElementById("nome") as HTMLInputElement)?.value
              redirectToWhatsApp(makeWhatsAppMessage({ nome }))
            }}
            className="font-semibold text-green-600 underline hover:text-green-700"
          >
            Fale pelo WhatsApp
          </button>
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
          Enviar outra mensagem
        </Button>
      </div>
    )
  }

  return (
    <form
      className="rounded-2xl border border-border bg-card p-7 lg:p-8"
      onSubmit={handleSubmit}
    >
      <FieldGroup>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="nome">Nome</FieldLabel>
            <Input id="nome" name="nome" required placeholder="Seu nome completo" />
          </Field>
          <Field>
            <FieldLabel htmlFor="empresa">Empresa</FieldLabel>
            <Input id="empresa" name="empresa" placeholder="Nome da empresa" />
          </Field>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="email">E-mail</FieldLabel>
            <Input id="email" name="email" type="email" required placeholder="seu@email.com.br" />
          </Field>
          <Field>
            <FieldLabel htmlFor="telefone">Telefone</FieldLabel>
            <Input id="telefone" name="telefone" placeholder="(00) 00000-0000" />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="segmento">Segmento</FieldLabel>
          <Select name="segmento">
            <SelectTrigger id="segmento">
              <SelectValue placeholder="Selecione o segmento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="varejo">Varejo</SelectItem>
              <SelectItem value="atacado">Atacado e distribuição</SelectItem>
              <SelectItem value="automotivo">Centro automotivo</SelectItem>
              <SelectItem value="outro">Outro</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="mensagem">Como podemos ajudar?</FieldLabel>
          <Textarea id="mensagem" name="mensagem" rows={5} placeholder="Conte um pouco sobre a sua necessidade..." />
        </Field>
        <Button type="submit" size="lg" className="w-full">
          Enviar mensagem
        </Button>
      </FieldGroup>
    </form>
  )
}
