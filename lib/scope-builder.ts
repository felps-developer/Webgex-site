export type ProjectModule = {
  id: string
  label: string
  description: string
  setupHours: number
}

export type CompanySize = {
  id: string
  label: string
  description: string
  userCount: number
}

export type AddOn = {
  id: string
  label: string
  description: string
  price: number
}

export const MODULES: ProjectModule[] = [
  {
    id: "cadastros",
    label: "Cadastros & Estoque",
    description: "Produtos, fornecedores, controle de estoque e inventário.",
    setupHours: 12,
  },
  {
    id: "financeiro",
    label: "Financeiro",
    description: "Contas a pagar/receber, fluxo de caixa e conciliação.",
    setupHours: 24,
  },
  {
    id: "fiscal",
    label: "Fiscal & Operações",
    description: "Emissão de NF-e/NFC-e, SPED e obrigações acessórias.",
    setupHours: 10,
  },
  {
    id: "controladoria",
    label: "Controladoria & DRE",
    description: "Indicadores gerenciais, DRE e dashboards de resultado.",
    setupHours: 12,
  },
  {
    id: "producao",
    label: "Produção e PCP",
    description: "Estruturas técnicas, demandas de produção e ordens de produção.",
    setupHours: 12,
  },
  {
    id: "orcamento",
    label: "Orçamento Empresarial",
    description: "Definição de rubricas, responsáveis e temporalidade com regras para compras e lançamentos de despesas.",
    setupHours: 12,
  },
  {
    id: "crm",
    label: "CRM & Pós-venda",
    description: "Histórico de clientes, funil de vendas e fidelização.",
    setupHours: 12,
  },
  {
    id: "pdv",
    label: "PDV / Frente de Caixa",
    description: "Venda no balcão, integração TEF e SAT/NFC-e.",
    setupHours: 12,
  },
]

export const SIZES: CompanySize[] = [
  {
    id: "micro",
    label: "Até 3 usuários",
    description: "Operação enxuta, 1 ponto de atendimento.",
    userCount: 3,
  },
  {
    id: "pequena",
    label: "6 a 15 usuários",
    description: "Equipe em crescimento, 1 a 2 unidades.",
    userCount: 15,
  },
  {
    id: "media",
    label: "16 a 40 usuários",
    description: "Múltiplas áreas e unidades.",
    userCount: 40,
  },
  {
    id: "grande",
    label: "Mais de 40 usuários",
    description: "Operação complexa e multi-filial.",
    userCount: 80,
  },
]

export const ADDONS: AddOn[] = [
  {
    id: "migracao",
    label: "Migração de dados",
    description: "Importação de cadastros e histórico do sistema atual.",
    price: 1800,
  },
  {
    id: "integracoes",
    label: "Integrações (e-commerce/marketplace)",
    description: "Conexão com lojas online e marketplaces.",
    price: 2400,
  },
  {
    id: "armazenamento",
    label: "Armazenamento extra (50 GB)",
    description: "Espaço em nuvem para fotos, anexos e documentos.",
    price: 100,
  },
  {
    id: "bi",
    label: "BI / APIs de Integração",
    description: "Acesso a APIs para BI próprio (1 licença de usuário). Projetos customizados orçados à parte.",
    price: 175,
  },
  {
    id: "whatsapp",
    label: "Integração WhatsApp",
    description: "Disparo de mensagens via WhatsApp oficial. Valor por número telefônico.",
    price: 200,
  },
]

export const PDV_PRICE = 175
export const USER_PRICE = 175
export const SETUP_HOURLY_RATE = 175
export const STORAGE_PRICE = 100
export const BI_PRICE = 175

export type ScopeSelection = {
  moduleIds: string[]
  sizeId: string
  addOnIds: string[]
  pdvCount: number
}

export type ScopeEstimate = {
  monthly: number
  setup: number
  timelineWeeks: number
  modules: ProjectModule[]
  addOns: AddOn[]
  size: CompanySize | null
  pdvCount: number
  breakdown: {
    label: string
    value: number
    isRecurring: boolean
  }[]
}

const HOURS_PER_WEEK = 40

export function estimateScope(selection: ScopeSelection): ScopeEstimate {
  const modules = MODULES.filter((m) => selection.moduleIds.includes(m.id))
  const addOns = ADDONS.filter((a) => selection.addOnIds.includes(a.id))
  const size = SIZES.find((s) => s.id === selection.sizeId) ?? null
  const userCount = size?.userCount ?? 3
  const pdvCount = selection.pdvCount || 0

  const breakdown: ScopeEstimate["breakdown"] = []

  const usersMonthly = userCount * USER_PRICE
  breakdown.push({ label: `${userCount} usuário(s) × ${formatBRL(USER_PRICE)}`, value: usersMonthly, isRecurring: true })

  let pdvMonthly = 0
  if (pdvCount > 0) {
    pdvMonthly = pdvCount * PDV_PRICE
    breakdown.push({ label: `${pdvCount} PDV(s) × ${formatBRL(PDV_PRICE)}`, value: pdvMonthly, isRecurring: true })
  }

  const RECURRING_ADDON_IDS = new Set(["armazenamento", "bi", "whatsapp"])

  const recurringAddOns = addOns
    .filter((a) => RECURRING_ADDON_IDS.has(a.id))
    .reduce((sum, a) => sum + a.price, 0)
  if (recurringAddOns > 0) {
    addOns.filter((a) => RECURRING_ADDON_IDS.has(a.id)).forEach((a) => {
      breakdown.push({ label: a.label, value: a.price, isRecurring: true })
    })
  }

  const monthly = usersMonthly + pdvMonthly + recurringAddOns

  const oneTimeAddOns = addOns
    .filter((a) => !RECURRING_ADDON_IDS.has(a.id))
    .reduce((sum, a) => sum + a.price, 0)

  // Setup: horas totais × taxa horária + add-ons pontuais
  const totalHours = modules.reduce((sum, m) => sum + m.setupHours, 0)
  const setupModules = totalHours * SETUP_HOURLY_RATE + oneTimeAddOns
  if (totalHours > 0) {
    breakdown.push({ label: `Implantação (${totalHours}h × ${formatBRL(SETUP_HOURLY_RATE)})`, value: setupModules, isRecurring: false })
  }
  if (oneTimeAddOns > 0) {
    addOns.filter((a) => !RECURRING_ADDON_IDS.has(a.id)).forEach((a) => {
      breakdown.push({ label: a.label, value: a.price, isRecurring: false })
    })
  }

  // Prazo: execução paralela + mínimo 2 semanas + 1 semana de validação
  const maxHours = modules.length > 0 ? Math.max(...modules.map((m) => m.setupHours)) : 0
  const estimatedHours = modules.length > 0
    ? Math.ceil(maxHours + (totalHours - maxHours) / 2)
    : 0
  const timelineWeeks = Math.max(2, Math.ceil(estimatedHours / HOURS_PER_WEEK)) + 1

  return {
    monthly,
    setup: setupModules,
    timelineWeeks,
    modules,
    addOns,
    size,
    pdvCount,
    breakdown,
  }
}

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  })
}

const STORAGE_KEY = "webgex-scope-draft"

export type ScopeDraft = {
  moduleIds: string[]
  sizeId: string
  addOnIds: string[]
  pdvCount: number
}

export function saveDraft(draft: ScopeDraft): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft))
  } catch {}
}

export function loadDraft(): ScopeDraft | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function clearDraft(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {}
}
