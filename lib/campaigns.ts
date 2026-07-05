import {
  Store,
  Truck,
  Wrench,
  Clock,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Boxes,
  Receipt,
  Users,
  Zap,
  Sofa,
  type LucideIcon,
} from "lucide-react"

export type Campaign = {
  slug: string
  segment: string
  icon: LucideIcon
  eyebrow: string
  headline: string
  subheadline: string
  heroImage: string
  pains: string[]
  benefits: { icon: LucideIcon; title: string; description: string }[]
  offer: {
    title: string
    description: string
    bullets: string[]
  }
  stats: { value: string; label: string }[]
  testimonial: { quote: string; author: string; role: string }
  faqs: { q: string; a: string }[]
}

export const campaigns: Campaign[] = [
  {
    slug: "varejo",
    segment: "Varejo",
    icon: Store,
    eyebrow: "ERP + PDV para Varejo",
    headline: "Sua loja está perdendo dinheiro e você nem sabe quanto.",
    subheadline:
      "Estoque que não bate, caixa que não fecha, margem que desaparece. O Webgex integra PDV, CRM e financeiro para parar o vazamento de lucro da sua loja.",
    heroImage: "/pdv.png",
    pains: [
      "Estoque da prateleira não bate com o do sistema — você compra o que já tem e perde venda do que falta",
      "Caixa desaba no fim do dia e ninguém sabe explicar a diferença",
      "Produtos que você achava que davam lucro estão na verdade corroendo sua margem",
      "Troca de informações entre vendedores, estoque e financeiro é manual e cheia de erros",
      "Cliente vai embora porque o vendedor demorou para consultar preço e estoque",
      "Comissão de vendedor vira novela toda vez que precisa ser calculada",
    ],
    benefits: [
      {
        icon: Zap,
        title: "PDV que não trava na hora do aperto",
        description: "Venda offline e online, TEF integrado, NFC-e na hora. Seu caixa nunca para, mesmo sem internet.",
      },
      {
        icon: Boxes,
        title: "Estoque que você pode confiar",
        description: "Cada venda baixa do estoque automaticamente. Alerta de reposição, inventário rápido e visão de giro por produto.",
      },
      {
        icon: BarChart3,
        title: "Margem real na palma da mão",
        description: "CRM integrado mostra ticket médio por cliente, produtos mais rentáveis e tabelas de preço inteligentes que ajustam margem automaticamente.",
      },
      {
        icon: Users,
        title: "CRM que vende junto com você",
        description: "Histórico de compras, preferências e carrinho abandonado. Sua equipe comercial vende mais porque conhece cada cliente.",
      },
      {
        icon: Receipt,
        title: "Fiscal sem susto",
        description: "NF-e, NFC-e e NFS-e emitidas direto do PDV. Apuração de impostos automática e atualizada com a reforma tributária. Compliance garantido sem depender de contador.",
      },
      {
        icon: Clock,
        title: "Fechamento de caixa em 5 minutos",
        description: "Conciliação automática com cartão, dinheiro e pix. O gerente fecha o dia e vai embora sem planilha.",
      },
    ],
    offer: {
      title: "Pare de apagar incêndio. Assuma o controle.",
      description: "Agende uma demonstração sem compromisso e veja o Webgex funcionando com dados reais da sua loja. Em 30 minutos você enxerga onde está perdendo dinheiro.",
      bullets: [
        "Implantação em até 2 semanas com suporte dedicado",
        "Migração dos seus dados sem perder histórico",
        "Treinamento da equipe de venda e caixa incluso",
        "Suporte contínuo sem taxa extra",
      ],
    },
    stats: [
      { value: "30 anos", label: "de mercado" },
      { value: "+2.500", label: "usuários ativos" },
      { value: "99,9%", label: "uptime" },
    ],
    testimonial: {
      quote:
        "Antes do Webgex, a gente descobria o rombo no caixa só no fim do mês. Hoje fechamos o dia em 10 minutos e sabemos o lucro de cada produto em tempo real.",
      author: "Marcos Almeida",
      role: "Proprietário, Rede de lojas de calçados",
    },
    faqs: [
      {
        q: "Funciona com mais de uma loja?",
        a: "Sim. O Webgex centraliza múltiplas lojas em um único painel. Você vê o resultado consolidado e por unidade em tempo real.",
      },
      {
        q: "Preciso trocar meus equipamentos de PDV?",
        a: "Dificilmente. O sistema é compatível com as principais marcas de impressoras fiscais, leitores e TEF do mercado.",
      },
      {
        q: "E se a internet cair?",
        a: "O PDV Webgex tem modo offline. As vendas continuam normalmente e sincronizam quando a conexão voltar.",
      },
      {
        q: "Quanto tempo leva para implantar?",
        a: "A maioria das lojas está operando entre 2 e 4 semanas, com acompanhamento diário da nossa equipe.",
      },
    ],
  },
  {
    slug: "distribuicao",
    segment: "Atacado e Distribuição",
    icon: Truck,
    eyebrow: "ERP para Atacado e Distribuição",
    headline: "Você está perdendo margem em cada pedido e não consegue enxergar onde.",
    subheadline:
      "Pedidos que se perdem entre vendedor e expedição, margem que some no frete e nos impostos, estoque parado que vira prejuízo. O Webgex dá visibilidade total da compra ao faturamento.",
    heroImage: "/erp-distribuicao.png",
    pains: [
      "Pedido do representante chega, é redigitado e algum erro sempre aparece no meio do caminho",
      "Margem real do pedido é um mistério — você calcula por cima e descobre o prejuízo depois",
      "Estoque de milhares de itens sem controle de giro, validade ou lote",
      "Tabela de preço diferente para cada cliente vira uma novela para gerenciar",
      "Entrega atrasa porque o financeiro não liberou e a expedição não foi avisada",
      "Força de vendas no campo trabalha cega, sem saber o que está em promoção ou em falta",
    ],
    benefits: [
      {
        icon: Truck,
        title: "Pedido do representante cai direto no sistema",
        description: "CRM de vendas integrado elimina redigitação. O pedido entra, passa pelo financeiro e vai para a expedição sem papel.",
      },
      {
        icon: TrendingUp,
        title: "Margem real por pedido, na hora",
        description: "O ERP calcula ICMS, PIS/COFINS, frete e custo operacional automaticamente. Você vê o lucro de cada venda antes de fechar.",
      },
      {
        icon: Boxes,
        title: "Estoque multidepósito com rastreabilidade",
        description: "Controle por lote, validade e múltiplos centros de distribuição. Alerta automático de reposição e inventário rotativo.",
      },
      {
        icon: ShieldCheck,
        title: "Política comercial inteligente",
        description: "Tabelas de preço por cliente, volume e região. Regras de desconto automáticas que o vendedor não pode burlar.",
      },
      {
        icon: Users,
        title: "Força de vendas com dados reais",
        description: "O representante vê no celular estoque, preço e promoção em tempo real. Fecha pedido na hora, sem ligar para o escritório.",
      },
      {
        icon: BarChart3,
        title: "DRE da distribuição completo",
        description: "Receita, custos, impostos e despesas por centro de resultado. Decisão baseada em dado, não em palpite.",
      },
    ],
    offer: {
      title: "Distribuição não pode operar no escuro",
      description: "Converse com um especialista Webgex e descubra onde a sua operação está perdendo margem. Em 30 minutos você sai com um raio-x da sua distribuição.",
      bullets: [
        "Análise gratuita dos seus processos atuais",
        "Mapeamento de gargalos comerciais e logísticos",
        "Proposta sob medida com precificação transparente",
        "Implantação com equipe dedicada e suporte local",
      ],
    },
    stats: [
      { value: "30 anos", label: "de mercado" },
      { value: "+2.500", label: "usuários ativos" },
      { value: "Tempo real", label: "em toda a operação" },
    ],
    testimonial: {
      quote:
        "Antes a gente só descobria que um pedido deu prejuízo depois de entregar. Hoje o sistema calcula a margem na hora e avisa se está abaixo do mínimo. Mudou nossa forma de vender.",
      author: "Patrícia Nunes",
      role: "Diretora, Distribuidora de alimentos",
    },
    faqs: [
      {
        q: "Integra com a força de vendas externa?",
        a: "Sim. O sistema é responsivo e pode ser usado em celulares, além de contar com API para integração com outras soluções de força de vendas.",
      },
      {
        q: "Controla vários depósitos?",
        a: "Sim. Estoque multidepósito com transferência entre filiais, inventário rotativo e rastreamento por lote.",
      },
      {
        q: "Calcula impostos diferentes por estado?",
        a: "Sim. O módulo fiscal trata regras tributárias de cada estado automaticamente — incluindo ST, MVA e redução de base — tudo atualizado com a reforma tributária.",
      },
    ],
  },
  {
    slug: "automotivo",
    segment: "Centro Automotivo",
    icon: Wrench,
    eyebrow: "ERP para Centros Automotivos",
    headline: "Sua oficina vive cheia, mas o lucro some e você não sabe para onde.",
    subheadline:
      "Ordem de serviço no papel, peça que sai do estoque e ninguém registra, comissão de mecânico que vira briga. O Webgex organiza sua oficina do orçamento ao fechamento.",
    heroImage: "/erp-automotivo.png",
    pains: [
      "Ordem de serviço rabiscada em papel que se perde antes de virar nota",
      "Peça sai do estoque para a OS mas nunca é baixada — você paga por peças que já vendeu",
      "Mecânico não sabe qual serviço fazer porque a fila de OS é uma bagunça",
      "Cliente liga para saber o andamento e ninguém tem a resposta na ponta da língua",
      "Comissão de cada mecânico vira dor de cabeça no fim do mês: planilha, erro e briga",
      "Peça que não tem no estoque — vendedor passa horas cotando fornecedor enquanto o cliente espera",
    ],
    benefits: [
      {
        icon: Wrench,
        title: "Ordem de serviço digital do começo ao fim",
        description: "Abertura por placa do veículo com histórico completo. Cotação de peça com disparo automático para o comprador. Aprovação do cliente no WhatsApp.",
      },
      {
        icon: Boxes,
        title: "Estoque de peças que baixa sozinho na OS",
        description: "Peça incluída na ordem de serviço sai do estoque automaticamente. Controle de giro, reposição e inventário sem esforço.",
      },
      {
        icon: Users,
        title: "CRM automotivo com histórico por veículo",
        description: "Saiba tudo que já foi feito em cada carro. Lembrete de revisão, agendamento e pós-venda para trazer o cliente de volta.",
      },
      {
        icon: Zap,
        title: "Comissionamento automático sem planilha",
        description: "Regra de comissão por mecânico, por peça ou por serviço. Cada OS calcula o valor na hora. Zero erro, zero briga.",
      },
      {
        icon: Receipt,
        title: "Fiscal completo: NFS-e e NF-e de peças",
        description: "Emissão de nota de serviço e de peças no mesmo lugar. Apuração automática de impostos atualizada com a reforma tributária, sem depender de contador.",
      },
      {
        icon: TrendingUp,
        title: "DRE por ordem de serviço",
        description: "Margem de cada OS calculada na hora: mão de obra, peças e serviços. Saiba exatamente o que dá lucro na sua oficina.",
      },
    ],
    offer: {
      title: "O caos da oficina tem solução",
      description: "Agende uma demonstração gratuita e veja o Webgex rodando com dados reais do seu centro automotivo. Em 30 minutos você enxerga onde o dinheiro está vazando.",
      bullets: [
        "Configuração para o seu tipo de oficina (mecânica, autopeças, funilaria)",
        "Migração do cadastro de clientes e veículos sem perda de histórico",
        "Treinamento da equipe de atendimento e mecânicos",
        "Suporte especializado no setor automotivo",
      ],
    },
    stats: [
      { value: "30 anos", label: "de mercado" },
      { value: "+2.500", label: "usuários ativos" },
      { value: "OS", label: "sob controle" },
    ],
    testimonial: {
      quote:
        "Cada OS tinha um papel voando pela oficina. Peça sumia, comissão era briga e no fim do mês a gente não sabia se tinha lucro. Hoje cada serviço tem preço, peça e margem calculados na hora.",
      author: "Roberto Faria",
      role: "Gerente, Centro automotivo",
    },
    faqs: [
      {
        q: "Controla histórico por veículo?",
        a: "Sim. Cada placa tem o histórico completo de serviços, peças e gastos. Ideal para fidelizar cliente e vender revisão programada.",
      },
      {
        q: "As peças baixam automaticamente na OS?",
        a: "Sim. Ao incluir uma peça na ordem de serviço, o estoque é atualizado em tempo real. Acabou o 'vendeu mas não baixou'.",
      },
      {
        q: "Emite nota de serviço e de peça separadas?",
        a: "Sim. O módulo fiscal emite NFS-e para mão de obra e NF-e para peças no mesmo fluxo, sem retrabalho.",
      },
      {
        q: "Funciona para autopeças que também vende no balcão?",
        a: "Sim. O sistema atende tanto a venda no balcão (PDV) quanto a ordem de serviço da oficina, com estoque único integrado.",
      },
    ],
  },
  {
    slug: "moveis",
    segment: "Móveis e Decoração",
    icon: Sofa,
    eyebrow: "ERP + PDV para lojas de móveis",
    headline: "Seu estoque de móveis está parado, mas o dinheiro continua saindo.",
    subheadline:
      "Mostruário que sai de linha, entrega que vira dor de cabeça, comissão que vira briga. O Webgex integra PDV, estoque e logística para sua loja de móveis vender mais e entregar sem susto.",
    heroImage: "/erp-moveis.png",
    pains: [
      "Peça de mostruário sai de linha, ninguém avisou e o cliente descobre na hora de comprar — venda perdida, cliente frustrado",
      "Móvel planejado é aprovado, fabricação atrasa, entrega não sincroniza e você fica apagando incêndio entre cliente e fábrica",
      "Estoque de peças grandes ocupa espaço que custa caro — produto parado é dinheiro empatado e ninguém gira",
      "Entrega combinada vira novela: motorista não acha endereço, cliente não está em casa, móvel volta para o estoque",
      "Comissão de vendedor calculada em planilha vira briga todo fim de mês — erro, retrabalho e desconfiança",
      "Cliente comprou um sofá e nunca mais deu notícia — zero pós-venda, zero recompra, zero fidelidade",
    ],
    benefits: [
      {
        icon: Zap,
        title: "PDV que não deixa o mostruário enganar",
        description: "Produto em exposição tem estoque real vinculado. Se acabou ou saiu de linha, o sistema avisa na hora. Zero venda de produto que não tem.",
      },
      {
        icon: Boxes,
        title: "Estoque inteligente para peças grandes",
        description: "Controle por lote, volume e localização física no depósito. Alerta de giro baixo e sugestão de reposição baseada em saída real.",
      },
      {
        icon: Truck,
        title: "Logística de entrega sem dor de cabeça",
        description: "Agenda de entregas integrada ao pedido. Rota otimizada, comprovante digital e status que o cliente acompanha. Acabou o 'vai voltar'.",
      },
      {
        icon: Users,
        title: "CRM com pós-venda que fideliza",
        description: "Histórico de compras, preferências de estilo e lembretes de reposição. Saiba quando o cliente precisa de um novo móvel e chegue antes.",
      },
      {
        icon: Receipt,
        title: "Financeiro com parcelamento inteligente",
        description: "Venda parcelada no cartão, boleto ou crediário próprio. Controle de entrada, fluxo de caixa e margem por peça — tudo automático.",
      },
      {
        icon: BarChart3,
        title: "Comissão que não vira briga",
        description: "Regra de comissão por vendedor, por peça ou por margem. Cada venda calcula o valor na hora. Todo mundo sabe quanto vai receber.",
      },
    ],
    offer: {
      title: "Sua loja de móveis merece um sistema que entrega tanto quanto você.",
      description: "Agende uma demonstração gratuita e veja o Webgex funcionando com dados reais da sua loja. Em 30 minutos você enxerga onde o dinheiro está vazando.",
      bullets: [
        "Implantação em até 2 semanas com suporte dedicado",
        "Migração dos seus dados sem perder histórico de clientes e vendas",
        "Treinamento da equipe de vendas, logística e financeiro",
        "Suporte contínuo sem taxa extra",
      ],
    },
    stats: [
      { value: "30 anos", label: "de mercado" },
      { value: "+2.500", label: "usuários ativos" },
      { value: "99,9%", label: "uptime" },
    ],
    testimonial: {
      quote:
        "Antes do Webgex, a gente só descobria que um produto tinha saido de linha quando o cliente reclamava. Hoje o sistema avisa antes e a gente já oferece alternativa na hora. Perdemos menos venda e cliente sai mais satisfeito.",
      author: "Carla Mendes",
      role: "Proprietária, Loja de móveis e decoração",
    },
    faqs: [
      {
        q: "Controla móvel planejado com prazo de fabricação?",
        a: "Sim. O sistema registra o prazo do fabricante, acompanha o status e avisa automaticamente quando está próximo do vencimento. Cliente e loja sabem exatamente onde está cada pedido.",
      },
      {
        q: "Funciona com entrega agendada?",
        a: "Sim. A agenda de entregas é integrada ao pedido. O motorista recebe a rota no celular, coleta comprovante digital e o cliente recebe notificação automática.",
      },
      {
        q: "Como controla os produtos de mostruário?",
        a: "Cada item em exposição tem um vínculo com o estoque real. Se a peça saiu de linha ou acabou, o PDV bloqueia a venda e sugere alternativas automaticamente.",
      },
      {
        q: "Preciso de equipamento especial?",
        a: "Não. O Webgex funciona em qualquer computador, tablet ou celular. Para o PDV, basta uma impressora fiscal compatível e um leitor de código de barras.",
      },
    ],
  },
]

export function getCampaign(slug: string) {
  return campaigns.find((c) => c.slug === slug)
}
