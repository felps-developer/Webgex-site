const CRM_URL = "https://webgex-crm-proxy-241464300074.southamerica-east1.run.app"

const WHATSAPP_NUMBER = "5585998020016"
const MAX_FIELD_LENGTH = 4000
const MAX_EMAIL_LENGTH = 254
const MAX_SUBJECT_LENGTH = 160
const MAX_MESSAGE_LENGTH = 24000
const SUBMISSION_WINDOW_MS = 10 * 60 * 1000
const MAX_CRM_SUBMISSIONS = 6
const MAX_EMAIL_SUBMISSIONS = 5
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const CONSULTANT_EMAIL_RE = /^[^\s@]+@unigex\.com\.br$/i

const SEGMENT_MAP: Record<string, string> = {
  varejo: "04",
  atacado: "03",
  distribuicao: "03",
  automotivo: "01",
  moveis: "05",
}

export function sanitize(str: string): string {
  return str.slice(0, MAX_FIELD_LENGTH).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase().slice(0, MAX_EMAIL_LENGTH)
}

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(normalizeEmail(email))
}

export function isAllowedConsultantEmail(email: string): boolean {
  const normalized = normalizeEmail(email)
  return normalized === "" || CONSULTANT_EMAIL_RE.test(normalized)
}

function withinClientLimit(key: string, max: number): boolean {
  if (typeof window === "undefined") return true

  try {
    const now = Date.now()
    const storageKey = `webgex:${key}:submissions`
    const attempts = JSON.parse(window.localStorage.getItem(storageKey) || "[]") as number[]
    const recent = attempts.filter((attempt) => now - attempt < SUBMISSION_WINDOW_MS)

    if (recent.length >= max) return false

    recent.push(now)
    window.localStorage.setItem(storageKey, JSON.stringify(recent))
    return true
  } catch {
    return true
  }
}

function hasHoneypot(data: Record<string, string>): boolean {
  return Boolean(data.website?.trim() || data.url?.trim())
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
    if (hasHoneypot(data) || !withinClientLimit("crm", MAX_CRM_SUBMISSIONS)) return

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
    const email = normalizeEmail(data.email)
    if (!isValidEmail(email) || !withinClientLimit("email", MAX_EMAIL_SUBMISSIONS)) return false

    const formData = new FormData()
    formData.append("email", sanitize(email))
    formData.append("bcc", BCC_EMAIL)
    formData.append("subject", sanitize(data.subject.slice(0, MAX_SUBJECT_LENGTH)))
    formData.append("message", sanitize(data.message.slice(0, MAX_MESSAGE_LENGTH)))

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
