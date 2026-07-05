const CRM_URL = "https://webgex-crm-proxy-241464300074.southamerica-east1.run.app"

const WHATSAPP_NUMBER = "5585998020016"

const SEGMENT_MAP: Record<string, string> = {
  varejo: "04",
  atacado: "03",
  distribuicao: "03",
  automotivo: "01",
  moveis: "05",
}

export function sanitize(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
}

export function getSegmentCode(segment: string): string {
  return SEGMENT_MAP[segment.toLowerCase()] || "02"
}

export function getWhatsAppUrl(phone: string, message: string): string {
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
}

export function makeWhatsAppMessage(data: Record<string, string>): string {
  const lines = [`Olá Webgex! Me cadastrei no site.`]
  if (data.nome) lines.push(`\n*Nome:* ${sanitize(data.nome)}`)
  if (data.empresa) lines.push(`*Empresa:* ${sanitize(data.empresa)}`)
  if (data.segmento) lines.push(`*Segmento:* ${sanitize(data.segmento)}`)
  if (data.classeNome) lines.push(`*Setor:* ${sanitize(data.classeNome)}`)
  if (data.score) lines.push(`*Maturidade:* ${sanitize(data.score)}/100`)
  lines.push(`\nGostaria de atendimento especializado.`)
  return lines.join("\n")
}

export async function sendLeadToCRM(data: Record<string, string>): Promise<void> {
  try {
    const sanitized: Record<string, string> = {}
    for (const [k, v] of Object.entries(data)) {
      sanitized[k] = sanitize(v)
    }
    await fetch(CRM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sanitized),
    })
  } catch (err) {
    console.error("CRM integration error:", err)
  }
}

export function redirectToWhatsApp(message: string): void {
  window.location.href = getWhatsAppUrl(WHATSAPP_NUMBER, message)
}

const EMAIL_URL = "https://unigex-email-241464300074.southamerica-east1.run.app"

// email protegido contra scraping simples (codificado em base64)
const BCC_EMAIL = atob("bW1pcmFuZGFAdW5pZ2V4LmNvbS5icg==")

export async function sendProposalEmail(data: {
  email: string
  subject: string
  message: string
}): Promise<boolean> {
  try {
    const formData = new FormData()
    formData.append("email", sanitize(data.email))
    formData.append("bcc", BCC_EMAIL)
    formData.append("subject", sanitize(data.subject))
    formData.append("message", sanitize(data.message))

    const res = await fetch(EMAIL_URL, {
      method: "POST",
      body: formData,
    })

    const text = await res.text()
    return res.ok && text.trim() === "OK"
  } catch (err) {
    console.error("Email sending error:", err)
    return false
  }
}
