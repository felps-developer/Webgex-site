export type Dimension = {
  id: string
  label: string
  description: string
}

export type Question = {
  id: string
  dimensionId: string
  text: string
}

export type Option = {
  label: string
  value: number
}

export const SCALE: Option[] = [
  { label: "Não temos isso", value: 1 },
  { label: "Estágio inicial / informal", value: 2 },
  { label: "Parcialmente implantado", value: 3 },
  { label: "Implantado e padronizado", value: 4 },
  { label: "Otimizado e orientado por dados", value: 5 },
]

export const DIMENSIONS: Dimension[] = [
  {
    id: "processos",
    label: "Processos & Operações",
    description: "Padronização e controle dos processos do dia a dia.",
  },
  {
    id: "financeiro",
    label: "Gestão Financeira",
    description: "Controle de caixa, conciliação e visão de resultado.",
  },
  {
    id: "dados",
    label: "Dados & Indicadores",
    description: "Uso de informação para tomar decisões.",
  },
  {
    id: "integracao",
    label: "Integração & Sistemas",
    description: "Quão conectados estão seus sistemas e canais.",
  },
  {
    id: "clientes",
    label: "Relacionamento com Clientes",
    description: "Gestão do relacionamento e experiência do cliente.",
  },
]

export const QUESTIONS: Question[] = [
  { id: "p1", dimensionId: "processos", text: "Seus processos de compra, estoque e venda são padronizados e documentados?" },
  { id: "p2", dimensionId: "processos", text: "Você consegue rastrear cada etapa de uma operação sem retrabalho manual?" },
  { id: "f1", dimensionId: "financeiro", text: "Seu fluxo de caixa é atualizado automaticamente a partir das operações?" },
  { id: "f2", dimensionId: "financeiro", text: "A conciliação bancária e de cartões é feita de forma integrada?" },
  { id: "d1", dimensionId: "dados", text: "Você acompanha indicadores (margem, giro, inadimplência) em tempo real?" },
  { id: "d2", dimensionId: "dados", text: "As decisões da empresa são baseadas em relatórios confiáveis?" },
  { id: "i1", dimensionId: "integracao", text: "Seus canais de venda (loja, PDV, e-commerce) usam a mesma base de dados?" },
  { id: "i2", dimensionId: "integracao", text: "Suas obrigações fiscais são emitidas direto do sistema de gestão?" },
  { id: "c1", dimensionId: "clientes", text: "Você possui um histórico centralizado de cada cliente e suas compras?" },
  { id: "c2", dimensionId: "clientes", text: "Existem ações estruturadas de pós-venda e fidelização?" },
]

export type Answers = Record<string, number>

export type DimensionResult = {
  dimension: Dimension
  score: number // 0-100
}

export type AssessmentResult = {
  overall: number // 0-100
  level: MaturityLevel
  dimensions: DimensionResult[]
}

export type MaturityLevel = {
  name: string
  range: [number, number]
  summary: string
  recommendation: string
}

export const LEVELS: MaturityLevel[] = [
  {
    name: "Inicial",
    range: [0, 40],
    summary:
      "A operação ainda depende de controles manuais e planilhas desconectadas, gerando retrabalho e baixa visibilidade.",
    recommendation:
      "Priorize a centralização das informações em um ERP único para eliminar planilhas e ganhar controle imediato sobre estoque e financeiro.",
  },
  {
    name: "Em desenvolvimento",
    range: [40, 65],
    summary:
      "Há processos parcialmente estruturados, mas a integração entre áreas e a visão de dados ainda são limitadas.",
    recommendation:
      "Conecte os módulos que ainda operam isolados e padronize indicadores para acelerar decisões e reduzir falhas.",
  },
  {
    name: "Consolidado",
    range: [65, 85],
    summary:
      "Sua gestão é integrada e orientada por processos. O foco agora é refinar indicadores e automatizar tarefas repetitivas.",
    recommendation:
      "Avance em automações, dashboards gerenciais e CRM para extrair mais valor dos dados que você já coleta.",
  },
  {
    name: "Otimizado",
    range: [85, 100],
    summary:
      "Sua empresa opera de forma integrada e orientada por dados, com processos maduros e alta previsibilidade.",
    recommendation:
      "Explore inteligência de dados, previsões e expansão de canais com a Webgex como parceira estratégica.",
  },
]

export function getLevel(score: number): MaturityLevel {
  return (
    LEVELS.find((l) => score >= l.range[0] && score <= l.range[1]) ?? LEVELS[0]
  )
}

export function calculateResult(answers: Answers): AssessmentResult {
  const dimensions: DimensionResult[] = DIMENSIONS.map((dimension) => {
    const dimQuestions = QUESTIONS.filter((q) => q.dimensionId === dimension.id)
    const total = dimQuestions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0)
    const max = dimQuestions.length * 5
    const score = max > 0 ? Math.round((total / max) * 100) : 0
    return { dimension, score }
  })

  const overallTotal = dimensions.reduce((sum, d) => sum + d.score, 0)
  const overall = Math.round(overallTotal / dimensions.length)

  return {
    overall,
    level: getLevel(overall),
    dimensions,
  }
}
