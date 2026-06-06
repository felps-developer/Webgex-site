// Gerado a partir da planilha exportada de roteiro de consultoria.
// Para atualizar preços: ajuste WEBGEX_PROPOSTA_PARAMETROS neste arquivo.
// Para atualizar atividades: exporte a aba Cronograma e regenere o catálogo mantendo o mesmo formato.
window.WEBGEX_PROPOSTA_PARAMETROS = {
  valorHoraImplantacao: 175,
  valorHoraImplantacaoDesconto: 150,
  limiteHorasDesconto: 80,
  horaPadraoAtividade: 0.25,
  valorCnpj: 1412,
  precoUsuarioAte10: 175,
  precoUsuarioAte20: 150,
  precoUsuarioAcima20: 130,
  precoNuvem: 150,
  precoPainel: 50,
  precoWhatsapp: 250,
  precoSitef: 200,
  precoCobranca: 100
};

window.WEBGEX_CONSULTORIA_ATIVIDADES = [
  {
    "row": 2,
    "phase": "0. Kick-off e Preparação",
    "module": "Gestão do Projeto",
    "task": "Reunião de Abertura e Definição de Key-Users",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Diretoria + Gerente do Projeto",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 3,
    "phase": "0. Kick-off e Preparação",
    "module": "Gestão do Projeto",
    "task": "Assinatura do Cronograma e Matriz de Responsabilidade",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Diretoria",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 4,
    "phase": "0. Kick-off e Preparação",
    "module": "Criação da Base do cliente",
    "task": "Criação da Base de dados do Cliente",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Administrativo + Consultoria",
    "hours": 1.0,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 5,
    "phase": "0. Kick-off e Preparação",
    "module": "Migração de Dados",
    "task": "Preparação de Planilhas para Importação",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Administrativo + Consultoria",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 6,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > ORGANIZAÇÃO",
    "task": "Configurar e Treinar: Unidades (Matriz e Filiais)",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Administrativo/Contábil",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 7,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > ORGANIZAÇÃO",
    "task": "Configurar e Treinar: Centros de Custo/Resultado",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Administrativo/Contábil",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "preco_dinamico"
    ]
  },
  {
    "row": 8,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > ORGANIZAÇÃO",
    "task": "Configurar e Treinar: Armazéns",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Administrativo/Contábil",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "servicos"
    ]
  },
  {
    "row": 9,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > ORGANIZAÇÃO",
    "task": "Configurar e Treinar: Plano de Contas",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Administrativo/Contábil",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 10,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > ORGANIZAÇÃO",
    "task": "Configurar e Treinar: Naturezas Financeiras",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Administrativo/Contábil",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 11,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > ORGANIZAÇÃO",
    "task": "Configurar e Treinar: Itens Contábeis",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Administrativo/Contábil",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 12,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > ORGANIZAÇÃO",
    "task": "Configurar e Treinar: Classificações Contábeis",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Administrativo/Contábil",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 13,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > ORGANIZAÇÃO",
    "task": "Configurar e Treinar: Códigos de Remuneração",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Administrativo/Contábil",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 14,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > PESSOAS FÍSICAS/JURÍDICAS",
    "task": "Configurar e Treinar: Clientes",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": true,
    "removeByDefault": false,
    "owner": "Administrativo/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 15,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > PESSOAS FÍSICAS/JURÍDICAS",
    "task": "Configurar e Treinar: Fornecedores",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": true,
    "removeByDefault": false,
    "owner": "Administrativo/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "fundacao"
    ]
  },
  {
    "row": 16,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > PESSOAS FÍSICAS/JURÍDICAS",
    "task": "Configurar e Treinar: Parceiros de Negócios",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Administrativo/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 17,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > PESSOAS FÍSICAS/JURÍDICAS",
    "task": "Configurar e Treinar: Empregados",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Administrativo/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 18,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > PESSOAS FÍSICAS/JURÍDICAS",
    "task": "Configurar e Treinar: Grupos Empresariais",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Administrativo/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 19,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > PESSOAS FÍSICAS/JURÍDICAS",
    "task": "Configurar e Treinar: Lotação de Empregados",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Administrativo/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 20,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > PESSOAS FÍSICAS/JURÍDICAS",
    "task": "Configurar e Treinar: Lotação de Clientes",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Administrativo/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 21,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > PRODUTOS E SERVIÇOS",
    "task": "Configurar e Treinar: Categorias",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": true,
    "removeByDefault": false,
    "owner": "Estoque/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "produtos",
      "servicos"
    ]
  },
  {
    "row": 22,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > PRODUTOS E SERVIÇOS",
    "task": "Configurar e Treinar: Grades de Produtos",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Estoque/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "produtos",
      "servicos"
    ]
  },
  {
    "row": 23,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > PRODUTOS E SERVIÇOS",
    "task": "Configurar e Treinar: Serviços",
    "process": "",
    "training": false,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Estoque/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "produtos",
      "servicos"
    ]
  },
  {
    "row": 24,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > PRODUTOS E SERVIÇOS",
    "task": "Configurar e Treinar: Materiais",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": true,
    "removeByDefault": false,
    "owner": "Estoque/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "produtos",
      "servicos"
    ]
  },
  {
    "row": 25,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > PRODUTOS E SERVIÇOS",
    "task": "Configurar e Treinar: Produtos Base",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": true,
    "removeByDefault": false,
    "owner": "Estoque/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "produtos",
      "servicos"
    ]
  },
  {
    "row": 26,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > PRODUTOS E SERVIÇOS",
    "task": "Configurar e Treinar: Produtos Variantes",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": true,
    "removeByDefault": false,
    "owner": "Estoque/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "produtos",
      "servicos"
    ]
  },
  {
    "row": 27,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > PRODUTOS E SERVIÇOS",
    "task": "Configurar e Treinar: Kits e Composições",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Estoque/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "pcp",
      "produtos",
      "servicos"
    ]
  },
  {
    "row": 28,
    "phase": "1. Fundação - Cadastros Básicos",
    "module": "CADASTROS > PRODUTOS E SERVIÇOS",
    "task": "Configurar e Treinar: Preços",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": true,
    "removeByDefault": false,
    "owner": "Estoque/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "produtos",
      "regras_comerciais",
      "servicos"
    ]
  },
  {
    "row": 29,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > ACESSOS E AUDITORIA",
    "task": "Configurar e Treinar: Utilizadores",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "TI/Segurança",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 30,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > ACESSOS E AUDITORIA",
    "task": "Configurar e Treinar: Grupos de Utilizadores",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": true,
    "removeByDefault": false,
    "owner": "TI/Segurança",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 31,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > ACESSOS E AUDITORIA",
    "task": "Configurar e Treinar: Controle de Acessos a Telas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "TI/Segurança",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 32,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > ACESSOS E AUDITORIA",
    "task": "Configurar e Treinar: Controle de Acessos a Comandos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "TI/Segurança",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 33,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > ACESSOS E AUDITORIA",
    "task": "Configurar e Treinar: Controle de Acessos a Regras de Negócios",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "TI/Segurança",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 34,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > ACESSOS E AUDITORIA",
    "task": "Configurar e Treinar: Consulta de Acessos e Permissões",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "TI/Segurança",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 35,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > ACESSOS E AUDITORIA",
    "task": "Configurar e Treinar: Auditoria do Sistema",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "TI/Segurança",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 36,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > ACESSOS E AUDITORIA",
    "task": "Configurar e Treinar: Eventos de Integração via API",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "TI/Segurança",
    "hours": null,
    "tags": [
      "base",
      "fundacao",
      "integracoes"
    ]
  },
  {
    "row": 37,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > PARAMETRIZAÇÃO",
    "task": "Configurar e Treinar: Calendário",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Consultoria/TI",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 38,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > PARAMETRIZAÇÃO",
    "task": "Configurar e Treinar: Parâmetros",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Consultoria/TI",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 39,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > PARAMETRIZAÇÃO",
    "task": "Configurar e Treinar: Tabelas Auxiliares",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Consultoria/TI",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 40,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > PARAMETRIZAÇÃO",
    "task": "Configurar e Treinar: Configuração de Demonstrativos Contábeis",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Consultoria/TI",
    "hours": 0.5,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 41,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > PARAMETRIZAÇÃO",
    "task": "Configurar e Treinar: Regras de Apuração de Resultados Contábeis",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Consultoria/TI",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 42,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > PARAMETRIZAÇÃO",
    "task": "Configurar e Treinar: Numeração dos Documentos e Arquivos",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": true,
    "removeByDefault": false,
    "owner": "Consultoria/TI",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 43,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > TABELAS OFICIAIS",
    "task": "Configurar e Treinar: Tabela de NCM",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal",
    "hours": null,
    "tags": [
      "base",
      "fiscal",
      "fundacao"
    ]
  },
  {
    "row": 44,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > TABELAS OFICIAIS",
    "task": "Configurar e Treinar: Tabela de NBS",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 45,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > TABELAS OFICIAIS",
    "task": "Configurar e Treinar: Tabela de CNAE",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 46,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > TABELAS OFICIAIS",
    "task": "Configurar e Treinar: Tabela de CFOP",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": true,
    "removeByDefault": false,
    "owner": "Fiscal",
    "hours": null,
    "tags": [
      "base",
      "fiscal",
      "fundacao"
    ]
  },
  {
    "row": 47,
    "phase": "2. Setup - Configurações Gerais",
    "module": "CONFIGURAÇÃO > TABELAS OFICIAIS",
    "task": "Configurar e Treinar: Alíquotas Interestaduais de ICMS",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 48,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > PARAMETRIZAÇÃO TRIBUTÁRIA",
    "task": "Configurar e Treinar: Transações",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": true,
    "removeByDefault": false,
    "owner": "Fiscal/Consultoria",
    "hours": 0.5,
    "tags": [
      "base",
      "fiscal",
      "fundacao"
    ]
  },
  {
    "row": 49,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > PARAMETRIZAÇÃO TRIBUTÁRIA",
    "task": "Configurar e Treinar: Automatismo Fiscal",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Consultoria",
    "hours": 0.5,
    "tags": [
      "base",
      "fiscal",
      "fundacao"
    ]
  },
  {
    "row": 50,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > PARAMETRIZAÇÃO TRIBUTÁRIA",
    "task": "Configurar e Treinar: Automatismo de Ajustes de ICMS",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Consultoria",
    "hours": null,
    "tags": [
      "base",
      "fiscal",
      "fundacao"
    ]
  },
  {
    "row": 51,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > PARAMETRIZAÇÃO TRIBUTÁRIA",
    "task": "Configurar e Treinar: Tributação de Produtos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Consultoria",
    "hours": null,
    "tags": [
      "base",
      "fiscal",
      "fundacao",
      "produtos"
    ]
  },
  {
    "row": 52,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > PARAMETRIZAÇÃO TRIBUTÁRIA",
    "task": "Configurar e Treinar: Tributação de Serviços",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Consultoria",
    "hours": null,
    "tags": [
      "base",
      "fiscal",
      "fundacao",
      "servicos"
    ]
  },
  {
    "row": 53,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > PARAMETRIZAÇÃO TRIBUTÁRIA",
    "task": "Configurar e Treinar: Observações Fiscais",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Consultoria",
    "hours": 0.25,
    "tags": [
      "base",
      "fiscal",
      "fundacao"
    ]
  },
  {
    "row": 54,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > PARAMETRIZAÇÃO TRIBUTÁRIA",
    "task": "Configurar e Treinar: Automatismo de Observações Fiscais",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Consultoria",
    "hours": 0.25,
    "tags": [
      "base",
      "fiscal",
      "fundacao"
    ]
  },
  {
    "row": 55,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > REGRAS COMERCIAIS",
    "task": "Configurar e Treinar: Formas de Pagamento",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Comercial/Consultoria",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "regras_comerciais",
      "servicos"
    ]
  },
  {
    "row": 56,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > REGRAS COMERCIAIS",
    "task": "Configurar e Treinar: Prazos de Pagamento",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": true,
    "removeByDefault": false,
    "owner": "Comercial/Consultoria",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "regras_comerciais"
    ]
  },
  {
    "row": 57,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > REGRAS COMERCIAIS",
    "task": "Configurar e Treinar: Regras de Descontos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Comercial/Consultoria",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "regras_comerciais"
    ]
  },
  {
    "row": 58,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > REGRAS COMERCIAIS",
    "task": "Configurar e Treinar: Regras de Preços",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Comercial/Consultoria",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "regras_comerciais"
    ]
  },
  {
    "row": 59,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > REGRAS COMERCIAIS",
    "task": "Configurar e Treinar: Regras de Prazos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Comercial/Consultoria",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "regras_comerciais"
    ]
  },
  {
    "row": 60,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > REGRAS COMERCIAIS",
    "task": "Configurar e Treinar: Regras de Faturamento",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": true,
    "removeByDefault": false,
    "owner": "Comercial/Consultoria",
    "hours": 0.25,
    "tags": [
      "base",
      "fiscal",
      "fundacao",
      "regras_comerciais"
    ]
  },
  {
    "row": 61,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > REGRAS COMERCIAIS",
    "task": "Configurar e Treinar: Regras de Descontos Automáticos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Comercial/Consultoria",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "regras_comerciais"
    ]
  },
  {
    "row": 62,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > REGRAS COMERCIAIS",
    "task": "Configurar e Treinar: Regras de Descontos Promocionais",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Comercial/Consultoria",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "regras_comerciais"
    ]
  },
  {
    "row": 63,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > REGRAS COMERCIAIS",
    "task": "Configurar e Treinar: Regras de Cupons de Descontos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Comercial/Consultoria",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "regras_comerciais"
    ]
  },
  {
    "row": 64,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > REGRAS COMERCIAIS",
    "task": "Configurar e Treinar: Regras Tributárias nas Vendas",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Comercial/Consultoria",
    "hours": null,
    "tags": [
      "base",
      "fiscal",
      "fundacao",
      "regras_comerciais",
      "vendas"
    ]
  },
  {
    "row": 65,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > REGRAS COMERCIAIS",
    "task": "Configurar e Treinar: Regras de Cálculo de Retenções",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Comercial/Consultoria",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "regras_comerciais"
    ]
  },
  {
    "row": 66,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > REGRAS COMERCIAIS",
    "task": "Configurar e Treinar: Automatismo de Observações Comerciais",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Comercial/Consultoria",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "regras_comerciais"
    ]
  },
  {
    "row": 67,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > CENTRAL DE COMUNICAÇÃO",
    "task": "Configurar e Treinar: Notificações Enviadas",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "Administrativo",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 68,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > MENSAGERIA",
    "task": "Configurar e Treinar: Gestão de Mensagens",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "TI",
    "hours": null,
    "tags": [
      "base",
      "fundacao",
      "whatsapp"
    ]
  },
  {
    "row": 69,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > FERRAMENTAS",
    "task": "Configurar e Treinar: Diagnóstico e Sincronização de Estoque",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "TI/Consultoria",
    "hours": 0.25,
    "tags": [
      "base",
      "fundacao",
      "integracoes",
      "produtos"
    ]
  },
  {
    "row": 70,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > CENTRAL DE COMUNICAÇÃO",
    "task": "Configurar e Treinar: Notificações Recebidas",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "Administrativo",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 71,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > MENSAGERIA",
    "task": "Configurar e Treinar: Gestão de Filas de Mensagens",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "TI",
    "hours": null,
    "tags": [
      "base",
      "fundacao",
      "whatsapp"
    ]
  },
  {
    "row": 72,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > CENTRAL DE COMUNICAÇÃO",
    "task": "Configurar e Treinar: Gestão de Notificações",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "Administrativo",
    "hours": null,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 73,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > MENSAGERIA",
    "task": "Configurar e Treinar: Gestão de Gatilhos de Mensagens",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "TI",
    "hours": null,
    "tags": [
      "base",
      "fundacao",
      "whatsapp"
    ]
  },
  {
    "row": 74,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > FERRAMENTAS",
    "task": "Configurar e Treinar: Painel de Fila de Faturamento",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "TI/Consultoria",
    "hours": null,
    "tags": [
      "base",
      "fiscal",
      "fundacao"
    ]
  },
  {
    "row": 75,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > FERRAMENTAS",
    "task": "Configurar e Treinar: Ajustes em Pedidos de Vendas Fechados",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "TI/Consultoria",
    "hours": null,
    "tags": [
      "base",
      "fundacao",
      "vendas"
    ]
  },
  {
    "row": 76,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > FERRAMENTAS",
    "task": "Configurar e Treinar: Quadro de OS automotivo",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "TI/Consultoria",
    "hours": null,
    "tags": [
      "automotivo",
      "base",
      "fundacao"
    ]
  },
  {
    "row": 77,
    "phase": "3. Parametrização - Regras de Negócio",
    "module": "CONFIGURAÇÃO > FERRAMENTAS",
    "task": "Configurar e Treinar: Quadro de Atividades",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "TI/Consultoria",
    "hours": null,
    "tags": [
      "base",
      "crm",
      "fundacao"
    ]
  },
  {
    "row": 78,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > CONTROLE DE ESTOQUE",
    "task": "Configurar e Treinar: Localizações de Estoque",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Almoxarife/Estoque",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 79,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > CONTROLE DE ESTOQUE",
    "task": "Configurar e Treinar: Posição de Estoque",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Almoxarife/Estoque",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 80,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > CONTROLE DE ESTOQUE",
    "task": "Configurar e Treinar: Posição de Estoque por Armazém",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Almoxarife/Estoque",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "produtos",
      "servicos"
    ]
  },
  {
    "row": 81,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > CONTROLE DE ESTOQUE",
    "task": "Configurar e Treinar: Posição de Estoque por Unidade Comercial",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Almoxarife/Estoque",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 82,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > CONTROLE DE ESTOQUE",
    "task": "Configurar e Treinar: Posição de Estoque - Físico X Conciliado",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Almoxarife/Estoque",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 83,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > CONTROLE DE ESTOQUE",
    "task": "Configurar e Treinar: Movimentação Interna",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Almoxarife/Estoque",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 84,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > CONTROLE DE ESTOQUE",
    "task": "Configurar e Treinar: Transferências Internas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Almoxarife/Estoque",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 85,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > CONTROLE DE ESTOQUE",
    "task": "Configurar e Treinar: Transferências Internas em Lote",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Almoxarife/Estoque",
    "hours": null,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 86,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > CONTROLE DE ESTOQUE",
    "task": "Configurar e Treinar: Tela de Conferência de Nota",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Almoxarife/Estoque",
    "hours": null,
    "tags": [
      "base",
      "compras",
      "fiscal",
      "produtos"
    ]
  },
  {
    "row": 87,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > CONTROLE DE ESTOQUE",
    "task": "Configurar e Treinar: Gestão de Números de Série",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Almoxarife/Estoque",
    "hours": null,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 88,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > CONTROLE DE ESTOQUE",
    "task": "Configurar e Treinar: Saldos Históricos de Estoque",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Almoxarife/Estoque",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 89,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > CONTROLE DE ESTOQUE",
    "task": "Configurar e Treinar: Fechamento de Saldos de Estoque",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Almoxarife/Estoque",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 90,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > SUPRIMENTOS",
    "task": "Configurar e Treinar: Processamento da Demanda",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras/Planejamento",
    "hours": null,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 91,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > SUPRIMENTOS",
    "task": "Configurar e Treinar: Consulta da Demanda",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras/Planejamento",
    "hours": null,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 92,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > SUPRIMENTOS",
    "task": "Configurar e Treinar: Parâmetros da Reposição",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras/Planejamento",
    "hours": null,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 93,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > SUPRIMENTOS",
    "task": "Configurar e Treinar: Sugestão de Compras",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras/Planejamento",
    "hours": null,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 94,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > SUPRIMENTOS",
    "task": "Configurar e Treinar: Análise de Preços",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras/Planejamento",
    "hours": 0.5,
    "tags": [
      "base",
      "compras",
      "dashboards",
      "produtos",
      "regras_comerciais"
    ]
  },
  {
    "row": 95,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > SUPRIMENTOS",
    "task": "Configurar e Treinar: Formação de Preços",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras/Planejamento",
    "hours": 0.5,
    "tags": [
      "base",
      "compras",
      "produtos",
      "regras_comerciais",
      "servicos"
    ]
  },
  {
    "row": 96,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > COMPRAS",
    "task": "Configurar e Treinar: Solicitações de Compra",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 97,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > COMPRAS",
    "task": "Configurar e Treinar: Solicitações de Compra em Lote",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras",
    "hours": null,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 98,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > COMPRAS",
    "task": "Configurar e Treinar: Cotações de Compras",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 99,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > COMPRAS",
    "task": "Configurar e Treinar: Análise de Cotações",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "dashboards",
      "produtos"
    ]
  },
  {
    "row": 100,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > COMPRAS",
    "task": "Configurar e Treinar: Pedidos de Compra",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "produtos",
      "vendas"
    ]
  },
  {
    "row": 101,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > COMPRAS",
    "task": "Configurar e Treinar: Pedidos de Importação",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "Compras",
    "hours": null,
    "tags": [
      "base",
      "compras",
      "produtos",
      "vendas"
    ]
  },
  {
    "row": 102,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > COMPRAS",
    "task": "Configurar e Treinar: Carteira Pedidos de Compra",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras",
    "hours": 0.25,
    "tags": [
      "base",
      "boletos",
      "compras",
      "financeiro",
      "produtos",
      "vendas"
    ]
  },
  {
    "row": 103,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > COMPRAS",
    "task": "Configurar e Treinar: Acompanhamento de Pedidos de Compra",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "produtos",
      "vendas"
    ]
  },
  {
    "row": 104,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > COMPRAS",
    "task": "Configurar e Treinar: Histórico de Compras",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras",
    "hours": null,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 105,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > COMPRAS",
    "task": "Configurar e Treinar: Gestão de Encomendas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras",
    "hours": 0.5,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 106,
    "phase": "4. Operacional - Estoque e Compras",
    "module": "OPERACIONAL > COMPRAS",
    "task": "Configurar e Treinar: Fornecedores por Produto",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras",
    "hours": null,
    "tags": [
      "base",
      "compras",
      "produtos"
    ]
  },
  {
    "row": 107,
    "phase": "5. Operacional - Faturamento e Logística",
    "module": "OPERACIONAL > FATURAMENTO",
    "task": "Configurar e Treinar: Separação de Mercadorias",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Faturamento/Expedição",
    "hours": null,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 108,
    "phase": "5. Operacional - Faturamento e Logística",
    "module": "OPERACIONAL > FATURAMENTO",
    "task": "Configurar e Treinar: Liberação para Faturamento",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Faturamento/Expedição",
    "hours": null,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 109,
    "phase": "5. Operacional - Faturamento e Logística",
    "module": "OPERACIONAL > FATURAMENTO",
    "task": "Configurar e Treinar: Faturamento de Vendas e Devoluções",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Faturamento/Expedição",
    "hours": 0.5,
    "tags": [
      "base",
      "fiscal",
      "vendas"
    ]
  },
  {
    "row": 110,
    "phase": "5. Operacional - Faturamento e Logística",
    "module": "OPERACIONAL > FATURAMENTO",
    "task": "Configurar e Treinar: Expedição de Vendas",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Faturamento/Expedição",
    "hours": null,
    "tags": [
      "base",
      "fiscal",
      "vendas"
    ]
  },
  {
    "row": 111,
    "phase": "5. Operacional - Faturamento e Logística",
    "module": "OPERACIONAL > FATURAMENTO",
    "task": "Configurar e Treinar: Romaneios",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Faturamento/Expedição",
    "hours": 0.5,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 112,
    "phase": "5. Operacional - Faturamento e Logística",
    "module": "OPERACIONAL > FATURAMENTO",
    "task": "Configurar e Treinar: Inutilização de Número de Nota Fiscal",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Faturamento/Expedição",
    "hours": 0.25,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 113,
    "phase": "5. Operacional - Faturamento e Logística",
    "module": "OPERACIONAL > FATURAMENTO",
    "task": "Configurar e Treinar: Pedidos x Documentos Fiscais",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Faturamento/Expedição",
    "hours": null,
    "tags": [
      "base",
      "fiscal",
      "vendas"
    ]
  },
  {
    "row": 114,
    "phase": "5. Operacional - Faturamento e Logística",
    "module": "OPERACIONAL > FATURAMENTO",
    "task": "Configurar e Treinar: Gestão de Notas Fiscais de Venda Futura",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Faturamento/Expedição",
    "hours": 0.5,
    "tags": [
      "base",
      "fiscal",
      "vendas"
    ]
  },
  {
    "row": 115,
    "phase": "5. Operacional - Faturamento e Logística",
    "module": "OPERACIONAL > INVENTÁRIO",
    "task": "Configurar e Treinar: Inventário",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Estoque",
    "hours": 1.0,
    "tags": [
      "base",
      "fiscal",
      "produtos"
    ]
  },
  {
    "row": 116,
    "phase": "5. Operacional - Faturamento e Logística",
    "module": "OPERACIONAL > INVENTÁRIO",
    "task": "Configurar e Treinar: Lista de Inventário",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Estoque",
    "hours": 0.5,
    "tags": [
      "base",
      "fiscal",
      "produtos"
    ]
  },
  {
    "row": 117,
    "phase": "5. Operacional - Faturamento e Logística",
    "module": "OPERACIONAL > INVENTÁRIO",
    "task": "Configurar e Treinar: Contagens de Estoque",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Estoque",
    "hours": 0.5,
    "tags": [
      "base",
      "fiscal",
      "produtos"
    ]
  },
  {
    "row": 118,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > CONTROLE DE RESERVAS",
    "task": "Configurar e Treinar: Gestão de Reserva de Produtos",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Vendas/Estoque",
    "hours": null,
    "tags": [
      "base",
      "produtos"
    ]
  },
  {
    "row": 119,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > CONTROLE DE RESERVAS",
    "task": "Configurar e Treinar: Gestão de Itens da Reserva dos Produtos",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Vendas/Estoque",
    "hours": null,
    "tags": [
      "base",
      "produtos"
    ]
  },
  {
    "row": 120,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PCP",
    "task": "Configurar e Treinar: Estrutura Técnica de Produtos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Produção/PCP",
    "hours": 0.5,
    "tags": [
      "base",
      "pcp",
      "produtos"
    ]
  },
  {
    "row": 121,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PCP",
    "task": "Configurar e Treinar: Estrutura Técnica de Classificação",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Produção/PCP",
    "hours": null,
    "tags": [
      "base",
      "pcp"
    ]
  },
  {
    "row": 122,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PCP",
    "task": "Configurar e Treinar: Gestão de Fórmulas Técnicas de Produtos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Produção/PCP",
    "hours": null,
    "tags": [
      "base",
      "pcp",
      "produtos"
    ]
  },
  {
    "row": 123,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PCP",
    "task": "Configurar e Treinar: Romaneios de Produção",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Produção/PCP",
    "hours": null,
    "tags": [
      "base",
      "pcp"
    ]
  },
  {
    "row": 124,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PCP",
    "task": "Configurar e Treinar: Ordens de Produção",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Produção/PCP",
    "hours": 1.0,
    "tags": [
      "base",
      "pcp"
    ]
  },
  {
    "row": 125,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PCP",
    "task": "Configurar e Treinar: Liberação de Matéria Prima",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Produção/PCP",
    "hours": 0.25,
    "tags": [
      "base",
      "pcp"
    ]
  },
  {
    "row": 126,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PCP",
    "task": "Configurar e Treinar: Gestão da Previsão de Vendas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Produção/PCP",
    "hours": null,
    "tags": [
      "base",
      "pcp",
      "vendas"
    ]
  },
  {
    "row": 127,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PCP",
    "task": "Configurar e Treinar: Processamento da Demanda Prevista de Insumos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Produção/PCP",
    "hours": null,
    "tags": [
      "base",
      "pcp"
    ]
  },
  {
    "row": 128,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PCP",
    "task": "Configurar e Treinar: Consulta Demanda Prevista de Insumos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Produção/PCP",
    "hours": 0.25,
    "tags": [
      "base",
      "pcp"
    ]
  },
  {
    "row": 129,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PCP",
    "task": "Configurar e Treinar: Demanda da Produção",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Produção/PCP",
    "hours": 0.25,
    "tags": [
      "base",
      "pcp"
    ]
  },
  {
    "row": 130,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > RASTREIO DE PRODUTOS",
    "task": "Configurar e Treinar: Lotes de Produtos",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Qualidade/Estoque",
    "hours": 0.25,
    "tags": [
      "base",
      "produtos"
    ]
  },
  {
    "row": 131,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PROJETOS E CONTRATOS",
    "task": "Configurar e Treinar: Projetos",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Projetos/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "contratos"
    ]
  },
  {
    "row": 132,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PROJETOS E CONTRATOS",
    "task": "Configurar e Treinar: Gestão de Projetos",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Projetos/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "contratos"
    ]
  },
  {
    "row": 133,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PROJETOS E CONTRATOS",
    "task": "Configurar e Treinar: Manutenção de Itens de Projetos",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Projetos/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "contratos"
    ]
  },
  {
    "row": 134,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > RASTREIO DE PRODUTOS",
    "task": "Configurar e Treinar: Rastreio de Lotes de Produtos",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Qualidade/Estoque",
    "hours": null,
    "tags": [
      "base",
      "produtos"
    ]
  },
  {
    "row": 135,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PROJETOS E CONTRATOS",
    "task": "Configurar e Treinar: Contratos de Compra",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Projetos/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "contratos"
    ]
  },
  {
    "row": 136,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PROJETOS E CONTRATOS",
    "task": "Configurar e Treinar: Gestão de Contratos de Compra",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Projetos/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "contratos"
    ]
  },
  {
    "row": 137,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PROJETOS E CONTRATOS",
    "task": "Configurar e Treinar: Manutenção de Itens de Contratos de Compra",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Projetos/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "contratos"
    ]
  },
  {
    "row": 138,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PROJETOS E CONTRATOS",
    "task": "Configurar e Treinar: Contratos de Venda",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Projetos/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "contratos",
      "vendas"
    ]
  },
  {
    "row": 139,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PROJETOS E CONTRATOS",
    "task": "Configurar e Treinar: Gestão de Contratos de Venda",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Projetos/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "contratos",
      "vendas"
    ]
  },
  {
    "row": 140,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > PROJETOS E CONTRATOS",
    "task": "Configurar e Treinar: Contratos de Venda Recorrente",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Projetos/Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "contratos",
      "vendas"
    ]
  },
  {
    "row": 141,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > COMISSÕES",
    "task": "Configurar e Treinar: Regras de Comissão",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Comercial/Financeiro",
    "hours": 0.5,
    "tags": [
      "base",
      "comissao"
    ]
  },
  {
    "row": 142,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > COMISSÕES",
    "task": "Configurar e Treinar: Regras Especiais de Comissão",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Comercial/Financeiro",
    "hours": 0.5,
    "tags": [
      "base",
      "comissao"
    ]
  },
  {
    "row": 143,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > COMISSÕES",
    "task": "Configurar e Treinar: Faixas de Comissão",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Comercial/Financeiro",
    "hours": 0.5,
    "tags": [
      "base",
      "comissao"
    ]
  },
  {
    "row": 144,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > COMISSÕES",
    "task": "Configurar e Treinar: Gestão de Metas de Vendas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Comercial/Financeiro",
    "hours": 0.5,
    "tags": [
      "base",
      "comissao",
      "vendas"
    ]
  },
  {
    "row": 145,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > COMISSÕES",
    "task": "Configurar e Treinar: Processamento da Comissão de Vendas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Comercial/Financeiro",
    "hours": 0.5,
    "tags": [
      "base",
      "comissao",
      "vendas"
    ]
  },
  {
    "row": 146,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > COMISSÕES",
    "task": "Configurar e Treinar: Valores de Comissão Calculadas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Comercial/Financeiro",
    "hours": 0.5,
    "tags": [
      "base",
      "comissao"
    ]
  },
  {
    "row": 147,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > SERVIÇOS",
    "task": "Configurar e Treinar: Veículos",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Oficina/Serviços",
    "hours": 0.25,
    "tags": [
      "base",
      "servicos"
    ]
  },
  {
    "row": 148,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > SERVIÇOS",
    "task": "Configurar e Treinar: Equipes",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Oficina/Serviços",
    "hours": 0.25,
    "tags": [
      "base",
      "servicos"
    ]
  },
  {
    "row": 149,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > SERVIÇOS",
    "task": "Configurar e Treinar: Linhas de Veículos",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Oficina/Serviços",
    "hours": 0.25,
    "tags": [
      "base",
      "servicos"
    ]
  },
  {
    "row": 150,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > SERVIÇOS",
    "task": "Configurar e Treinar: Ordens de Serviço Automotivo",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Oficina/Serviços",
    "hours": 1.0,
    "tags": [
      "automotivo",
      "base",
      "servicos"
    ]
  },
  {
    "row": 151,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > SERVIÇOS",
    "task": "Configurar e Treinar: Histórico de Veículos",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Oficina/Serviços",
    "hours": 0.25,
    "tags": [
      "base",
      "servicos"
    ]
  },
  {
    "row": 152,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > SERVIÇOS",
    "task": "Configurar e Treinar: Cotação Emergencial",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Oficina/Serviços",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "cotacao",
      "servicos"
    ]
  },
  {
    "row": 153,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > SERVIÇOS",
    "task": "Configurar e Treinar: Compra Emergencial",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Oficina/Serviços",
    "hours": 0.25,
    "tags": [
      "base",
      "servicos"
    ]
  },
  {
    "row": 154,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > SERVIÇOS",
    "task": "Configurar e Treinar: Liberação de Estoque",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Oficina/Serviços",
    "hours": 0.25,
    "tags": [
      "base",
      "produtos",
      "servicos"
    ]
  },
  {
    "row": 155,
    "phase": "6. Operacional - Processos Especiais",
    "module": "OPERACIONAL > SERVIÇOS",
    "task": "Configurar e Treinar: Entrega de Peças",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Oficina/Serviços",
    "hours": 0.25,
    "tags": [
      "base",
      "servicos"
    ]
  },
  {
    "row": 156,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > DOCUMENTOS FISCAIS",
    "task": "Configurar e Treinar: Notas Fiscais",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Faturamento",
    "hours": 0.5,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 157,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > DOCUMENTOS FISCAIS",
    "task": "Configurar e Treinar: Notas Fiscais ao Consumidor",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Faturamento",
    "hours": 0.25,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 158,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > DOCUMENTOS FISCAIS",
    "task": "Configurar e Treinar: Cupons Fiscais",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Faturamento",
    "hours": null,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 159,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > DOCUMENTOS FISCAIS",
    "task": "Configurar e Treinar: Notas Fiscais de Serviços",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Faturamento",
    "hours": 0.25,
    "tags": [
      "base",
      "fiscal",
      "servicos"
    ]
  },
  {
    "row": 160,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > DOCUMENTOS FISCAIS",
    "task": "Configurar e Treinar: Notas Fiscais de Entrada",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Faturamento",
    "hours": 0.5,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 161,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > DOCUMENTOS FISCAIS",
    "task": "Configurar e Treinar: Conhecimentos de Frete",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Faturamento",
    "hours": 0.25,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 162,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > DOCUMENTOS FISCAIS",
    "task": "Configurar e Treinar: DAE Sobre Compras",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Faturamento",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "fiscal"
    ]
  },
  {
    "row": 163,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > OUTROS DOCUMENTOS",
    "task": "Configurar e Treinar: Transferência de Mercadorias",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Expedição",
    "hours": 0.25,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 164,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > OUTROS DOCUMENTOS",
    "task": "Configurar e Treinar: Transferência de Mercadorias em Lote",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Expedição",
    "hours": null,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 165,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > OUTROS DOCUMENTOS",
    "task": "Configurar e Treinar: Outras Entradas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Expedição",
    "hours": null,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 166,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > OUTROS DOCUMENTOS",
    "task": "Configurar e Treinar: Outras Saídas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Expedição",
    "hours": null,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 167,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > OUTROS DOCUMENTOS",
    "task": "Configurar e Treinar: Devolução de Compras",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Expedição",
    "hours": 0.25,
    "tags": [
      "base",
      "compras",
      "fiscal"
    ]
  },
  {
    "row": 168,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > OUTROS DOCUMENTOS",
    "task": "Configurar e Treinar: Notas Destinadas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Expedição",
    "hours": 0.25,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 169,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > OUTROS DOCUMENTOS",
    "task": "Configurar e Treinar: Manifesto de Carga",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Expedição",
    "hours": null,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 170,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > OUTROS DOCUMENTOS",
    "task": "Configurar e Treinar: Cartas de Correção",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Expedição",
    "hours": 0.25,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 171,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > DESPESAS",
    "task": "Configurar e Treinar: Despesas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contábil",
    "hours": 0.5,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 172,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > DESPESAS",
    "task": "Configurar e Treinar: Previsão de Despesas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contábil",
    "hours": 0.25,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 173,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > DESPESAS",
    "task": "Configurar e Treinar: Rateios Padrão",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contábil",
    "hours": null,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 174,
    "phase": "7. Lançamentos - Documentos Fiscais",
    "module": "LANÇAMENTOS > DESPESAS",
    "task": "Configurar e Treinar: Folha de Pagamento",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contábil",
    "hours": null,
    "tags": [
      "base",
      "fiscal"
    ]
  },
  {
    "row": 175,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > TESOURARIA",
    "task": "Configurar e Treinar: Contas, Caixas e Cartões",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": 0.25,
    "tags": [
      "base",
      "financeiro",
      "pdv"
    ]
  },
  {
    "row": 176,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > TESOURARIA",
    "task": "Configurar e Treinar: Movimentação Financeira",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": 0.5,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 177,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > TESOURARIA",
    "task": "Configurar e Treinar: Extratos Bancários",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": 1.0,
    "tags": [
      "base",
      "financeiro",
      "ofx"
    ]
  },
  {
    "row": 178,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > TESOURARIA",
    "task": "Configurar e Treinar: Saldos das Contas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": 0.25,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 179,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > TESOURARIA",
    "task": "Configurar e Treinar: Histórico de Saldos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": 0.25,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 180,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > TESOURARIA",
    "task": "Configurar e Treinar: Conta Corrente de Empregados",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": null,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 181,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > TESOURARIA",
    "task": "Configurar e Treinar: Adiantamentos a Empregados",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": null,
    "tags": [
      "adiantamentos",
      "base",
      "financeiro"
    ]
  },
  {
    "row": 182,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > TESOURARIA",
    "task": "Configurar e Treinar: Operações Financeiras",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": null,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 183,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CONTAS A PAGAR",
    "task": "Configurar e Treinar: Contas a Pagar",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contas a Pagar",
    "hours": 0.5,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 184,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CONTAS A PAGAR",
    "task": "Configurar e Treinar: Gestão de Retenções",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contas a Pagar",
    "hours": 0.25,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 185,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CONTAS A PAGAR",
    "task": "Configurar e Treinar: Renegociações de Títulos a Pagar",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contas a Pagar",
    "hours": 0.25,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 186,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CONTAS A PAGAR",
    "task": "Configurar e Treinar: Adiantamentos a Fornecedores",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contas a Pagar",
    "hours": 0.25,
    "tags": [
      "adiantamentos",
      "base",
      "compras",
      "financeiro"
    ]
  },
  {
    "row": 187,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CONTAS A PAGAR",
    "task": "Configurar e Treinar: Lançamento Manual de Contas a Pagar",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contas a Pagar",
    "hours": 0.25,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 188,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CONTAS A PAGAR",
    "task": "Configurar e Treinar: Autorização de Pagamentos",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contas a Pagar",
    "hours": null,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 189,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CONTAS A RECEBER",
    "task": "Configurar e Treinar: Contas a Receber",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contas a Receber",
    "hours": 0.5,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 190,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CONTAS A RECEBER",
    "task": "Configurar e Treinar: Previsão de Receitas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contas a Receber",
    "hours": 0.25,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 191,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CONTAS A RECEBER",
    "task": "Configurar e Treinar: Renegociações de Títulos a Receber",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contas a Receber",
    "hours": 0.25,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 192,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CONTAS A RECEBER",
    "task": "Configurar e Treinar: Títulos a Receber Descontados",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contas a Receber",
    "hours": 0.25,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 193,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CONTAS A RECEBER",
    "task": "Configurar e Treinar: Gestão de Créditos de Clientes",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contas a Receber",
    "hours": 0.25,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 194,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CONTAS A RECEBER",
    "task": "Configurar e Treinar: Adiantamentos de Clientes",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contas a Receber",
    "hours": 0.25,
    "tags": [
      "adiantamentos",
      "base",
      "financeiro"
    ]
  },
  {
    "row": 195,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CONTAS A RECEBER",
    "task": "Configurar e Treinar: Acertos de Conta Corrente de Clientes",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contas a Receber",
    "hours": 0.25,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 196,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CONTAS A RECEBER",
    "task": "Configurar e Treinar: Gerar/Consultar PIX",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contas a Receber",
    "hours": null,
    "tags": [
      "base",
      "financeiro",
      "pix"
    ]
  },
  {
    "row": 197,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CONTAS A RECEBER",
    "task": "Configurar e Treinar: Lançamento Manual de Contas a Receber",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro/Contas a Receber",
    "hours": 0.25,
    "tags": [
      "base",
      "financeiro"
    ]
  },
  {
    "row": 198,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > COBRANÇA BANCÁRIA",
    "task": "Configurar e Treinar: Carteiras de Cobrança",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": 0.25,
    "tags": [
      "base",
      "boletos",
      "financeiro"
    ]
  },
  {
    "row": 199,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > COBRANÇA BANCÁRIA",
    "task": "Configurar e Treinar: Integração de Carteiras de Cobrança",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": 0.25,
    "tags": [
      "base",
      "boletos",
      "financeiro",
      "integracoes"
    ]
  },
  {
    "row": 200,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > COBRANÇA BANCÁRIA",
    "task": "Configurar e Treinar: Cobrança Bancária",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": 0.25,
    "tags": [
      "base",
      "boletos",
      "financeiro"
    ]
  },
  {
    "row": 201,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > COBRANÇA BANCÁRIA",
    "task": "Configurar e Treinar: Cobrança Bancária Automática",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": 0.25,
    "tags": [
      "base",
      "boletos",
      "financeiro"
    ]
  },
  {
    "row": 202,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > COBRANÇA BANCÁRIA",
    "task": "Configurar e Treinar: Retorno Bancário",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": 0.25,
    "tags": [
      "base",
      "boletos",
      "financeiro"
    ]
  },
  {
    "row": 203,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CARTÕES DE CRÉDITO",
    "task": "Configurar e Treinar: Contas a Receber - Cartão de Crédito",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": 0.25,
    "tags": [
      "base",
      "cartoes",
      "financeiro"
    ]
  },
  {
    "row": 204,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CARTÕES DE CRÉDITO",
    "task": "Configurar e Treinar: Conciliação de Cartões Crédito",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": null,
    "tags": [
      "base",
      "cartoes",
      "financeiro"
    ]
  },
  {
    "row": 205,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CARTÕES DE CRÉDITO",
    "task": "Configurar e Treinar: POS Cartão de Crédito",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": null,
    "tags": [
      "base",
      "cartoes",
      "financeiro"
    ]
  },
  {
    "row": 206,
    "phase": "8. Financeiro - Tesouraria e Cobranças",
    "module": "FINANCEIRO > CARTÕES DE CRÉDITO",
    "task": "Configurar e Treinar: Adquirentes",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Financeiro",
    "hours": null,
    "tags": [
      "base",
      "cartoes",
      "financeiro"
    ]
  },
  {
    "row": 207,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > CONTABILIDADE",
    "task": "Configurar e Treinar: Lançamentos Contábeis",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Contador/Controladoria",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 208,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > CONTABILIDADE",
    "task": "Configurar e Treinar: Saldos Contábeis",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Contador/Controladoria",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 209,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > CONTABILIDADE",
    "task": "Configurar e Treinar: Balancete",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Contador/Controladoria",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 210,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > CONTABILIDADE",
    "task": "Configurar e Treinar: Razão",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Contador/Controladoria",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 211,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > CONTABILIDADE",
    "task": "Configurar e Treinar: Demonstrativos Contábeis",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Contador/Controladoria",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 212,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > CONTABILIDADE",
    "task": "Configurar e Treinar: Demonstrativo de Saldo de Terceiros",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Contador/Controladoria",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 213,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > CONTABILIDADE",
    "task": "Configurar e Treinar: Evolução de Saldos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Contador/Controladoria",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 214,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > CONTABILIDADE",
    "task": "Configurar e Treinar: Apuração de Resultados",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Contador/Controladoria",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 215,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > CONTABILIDADE",
    "task": "Configurar e Treinar: Encerramento Contábil",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Contador/Controladoria",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 216,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > CONTABILIDADE",
    "task": "Configurar e Treinar: Fechamento de Períodos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Contador/Controladoria",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 217,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > CONTABILIDADE",
    "task": "Configurar e Treinar: Diagnóstico Contábil",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Contador/Controladoria",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 218,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > ESCRITA FISCAL",
    "task": "Configurar e Treinar: Conferência de Impostos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Contador",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 219,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > ESCRITA FISCAL",
    "task": "Configurar e Treinar: Quadro Resumo de Impostos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Contador",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 220,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > ESCRITA FISCAL",
    "task": "Configurar e Treinar: Quadro Demonstrativo DIFAL",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Contador",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 221,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > ESCRITA FISCAL",
    "task": "Configurar e Treinar: Conferência de Ajustes de ICMS",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Contador",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 222,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > ESCRITA FISCAL",
    "task": "Configurar e Treinar: SPED - EFD ICMS/IPI",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Contador",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 223,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > ESCRITA FISCAL",
    "task": "Configurar e Treinar: SPED - EFD Contribuições",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Contador",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 224,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > ESCRITA FISCAL",
    "task": "Configurar e Treinar: SPED - REINF",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Contador",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 225,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > ESCRITA FISCAL",
    "task": "Configurar e Treinar: SPED - Inventário Estoque",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Contador",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal",
      "produtos"
    ]
  },
  {
    "row": 226,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > ESCRITA FISCAL",
    "task": "Configurar e Treinar: SPED - ECD Contábil",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal/Contador",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal"
    ]
  },
  {
    "row": 227,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > ORÇAMENTO",
    "task": "Configurar e Treinar: Orçamento",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Controladoria/Planejamento",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal",
      "orcamento",
      "vendas"
    ]
  },
  {
    "row": 228,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > ORÇAMENTO",
    "task": "Configurar e Treinar: Movimentação Orçamentária",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Controladoria/Planejamento",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal",
      "orcamento",
      "vendas"
    ]
  },
  {
    "row": 229,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > ORÇAMENTO",
    "task": "Configurar e Treinar: Alçadas de Despesas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Controladoria/Planejamento",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "cotacao",
      "fiscal",
      "orcamento",
      "vendas"
    ]
  },
  {
    "row": 230,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > ORÇAMENTO",
    "task": "Configurar e Treinar: Alçadas de Validação de Despesas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Controladoria/Planejamento",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "cotacao",
      "fiscal",
      "fundacao",
      "orcamento",
      "vendas"
    ]
  },
  {
    "row": 231,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > ORÇAMENTO",
    "task": "Configurar e Treinar: Alçadas de Pedidos de Compras",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Controladoria/Planejamento",
    "hours": null,
    "tags": [
      "base",
      "compras",
      "contabilidade_interna",
      "controladoria",
      "cotacao",
      "fiscal",
      "orcamento",
      "vendas"
    ]
  },
  {
    "row": 232,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > ORÇAMENTO",
    "task": "Configurar e Treinar: Alçadas de Notas de Compras",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Controladoria/Planejamento",
    "hours": null,
    "tags": [
      "base",
      "compras",
      "contabilidade_interna",
      "controladoria",
      "cotacao",
      "fiscal",
      "orcamento",
      "vendas"
    ]
  },
  {
    "row": 233,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > ORÇAMENTO",
    "task": "Configurar e Treinar: Alçadas de Autorização de Pagamentos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Controladoria/Planejamento",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "cotacao",
      "fiscal",
      "orcamento",
      "vendas"
    ]
  },
  {
    "row": 234,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > IMOBILIZADO",
    "task": "Configurar e Treinar: Itens de Imobilizado",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Contabilidade/Patrimônio",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal",
      "imobilizado"
    ]
  },
  {
    "row": 235,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > IMOBILIZADO",
    "task": "Configurar e Treinar: Localizações de Imobilizado",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Contabilidade/Patrimônio",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal",
      "imobilizado"
    ]
  },
  {
    "row": 236,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > IMOBILIZADO",
    "task": "Configurar e Treinar: Tipos de Itens do Imobilizado",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Contabilidade/Patrimônio",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal",
      "imobilizado"
    ]
  },
  {
    "row": 237,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > IMOBILIZADO",
    "task": "Configurar e Treinar: Processamento do Imobilizado",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Contabilidade/Patrimônio",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal",
      "imobilizado"
    ]
  },
  {
    "row": 238,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > PAINÉIS DE GESTÃO",
    "task": "Configurar e Treinar: Painel do Gestor de Vendas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "Gerência/Diretoria",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "dashboards",
      "fiscal",
      "vendas"
    ]
  },
  {
    "row": 239,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > PAINÉIS DE GESTÃO",
    "task": "Configurar e Treinar: Painel de Contas a Receber",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "Gerência/Diretoria",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "dashboards",
      "financeiro",
      "fiscal"
    ]
  },
  {
    "row": 240,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > PAINÉIS DE GESTÃO",
    "task": "Configurar e Treinar: Painel de Contas a Pagar",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "Gerência/Diretoria",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "dashboards",
      "financeiro",
      "fiscal"
    ]
  },
  {
    "row": 241,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > PAINÉIS DE GESTÃO",
    "task": "Configurar e Treinar: Painel de Estoque",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "Gerência/Diretoria",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "dashboards",
      "fiscal",
      "produtos"
    ]
  },
  {
    "row": 242,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > PAINÉIS DE GESTÃO",
    "task": "Configurar e Treinar: Painel de Faturamento",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "Gerência/Diretoria",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "dashboards",
      "fiscal"
    ]
  },
  {
    "row": 243,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > REFORMA TRIBUTÁRIA",
    "task": "Configurar e Treinar: Situação Tributária IBS / CBS",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal",
      "servicos"
    ]
  },
  {
    "row": 244,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > REFORMA TRIBUTÁRIA",
    "task": "Configurar e Treinar: Classificação Tributária IBS / CBS",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal",
      "servicos"
    ]
  },
  {
    "row": 245,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > REFORMA TRIBUTÁRIA",
    "task": "Configurar e Treinar: NCM / NBS por Classificação Tributária",
    "process": "",
    "training": true,
    "templatePreloaded": true,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal",
      "servicos"
    ]
  },
  {
    "row": 246,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > REFORMA TRIBUTÁRIA",
    "task": "Configurar e Treinar: Tributação de Produtos e Serviços IBS / CBS",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal",
      "fundacao",
      "produtos",
      "servicos"
    ]
  },
  {
    "row": 247,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > REFORMA TRIBUTÁRIA",
    "task": "Configurar e Treinar: Automatismo Fiscal IBS / CBS",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal",
      "servicos"
    ]
  },
  {
    "row": 248,
    "phase": "9. Controladoria - Contabilidade e Fiscal",
    "module": "CONTROLADORIA > REFORMA TRIBUTÁRIA",
    "task": "Configurar e Treinar: Conferência de Impostos IBS / CBS / IS",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Fiscal",
    "hours": 0.25,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal",
      "servicos"
    ]
  },
  {
    "row": 249,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > VENDAS",
    "task": "Configurar e Treinar: Painel do Vendedor",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": true,
    "owner": "Vendedores",
    "hours": null,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 250,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > VENDAS",
    "task": "Configurar e Treinar: Central de Vendas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Vendedores",
    "hours": 1.0,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 251,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > VENDAS",
    "task": "Configurar e Treinar: Quadro de Vendas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Vendedores",
    "hours": null,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 252,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > VENDAS",
    "task": "Configurar e Treinar: Central de Vendas Mobile",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Vendedores",
    "hours": null,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 253,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > VENDAS",
    "task": "Configurar e Treinar: Consulta de Preços",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Vendedores",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "regras_comerciais",
      "vendas"
    ]
  },
  {
    "row": 254,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > VENDAS",
    "task": "Configurar e Treinar: Tela de Pré-venda",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Vendedores",
    "hours": 1.0,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 255,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > VENDAS",
    "task": "Configurar e Treinar: Contratos de Venda",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Vendedores",
    "hours": null,
    "tags": [
      "base",
      "contratos",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 256,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > VENDAS",
    "task": "Configurar e Treinar: Contratos de Venda Recorrente",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Vendedores",
    "hours": null,
    "tags": [
      "base",
      "contratos",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 257,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > VENDAS",
    "task": "Configurar e Treinar: Consulta de Produtos com Imagens",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Vendedores",
    "hours": null,
    "tags": [
      "base",
      "crm",
      "produtos",
      "vendas"
    ]
  },
  {
    "row": 258,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM OPERACIONAL",
    "task": "Configurar e Treinar: Meus Leads",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Vendedores",
    "hours": null,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 259,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM OPERACIONAL",
    "task": "Configurar e Treinar: Minhas Atividades",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Vendedores",
    "hours": null,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 260,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM OPERACIONAL",
    "task": "Configurar e Treinar: Minhas Ocorrências",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Vendedores",
    "hours": null,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 261,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM OPERACIONAL",
    "task": "Configurar e Treinar: Minha Carteira de Clientes",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Vendedores",
    "hours": null,
    "tags": [
      "base",
      "boletos",
      "crm",
      "financeiro",
      "vendas"
    ]
  },
  {
    "row": 262,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM GERENCIAL",
    "task": "Configurar e Treinar: Gestão de Oportunidades de Negócio",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Gerente Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 263,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM GERENCIAL",
    "task": "Configurar e Treinar: Gestão da Carteira de Clientes",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Gerente Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "boletos",
      "crm",
      "financeiro",
      "vendas"
    ]
  },
  {
    "row": 264,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM GERENCIAL",
    "task": "Configurar e Treinar: Gestão da Carteira de Leads",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Gerente Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "boletos",
      "crm",
      "financeiro",
      "vendas"
    ]
  },
  {
    "row": 265,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM GERENCIAL",
    "task": "Configurar e Treinar: Gestão de Equipes",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Gerente Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 266,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM GERENCIAL",
    "task": "Configurar e Treinar: Gestão de Atividades",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Gerente Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 267,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM GERENCIAL",
    "task": "Configurar e Treinar: Gestão de Ocorrências",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Gerente Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 268,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM GERENCIAL",
    "task": "Configurar e Treinar: Gestão de Campanhas",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Gerente Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 269,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > GESTÃO COMERCIAL",
    "task": "Configurar e Treinar: Gestão de Metas de Vendas",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Gerente Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 270,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > GESTÃO COMERCIAL",
    "task": "Configurar e Treinar: Gestão de Previsão de Vendas",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Gerente Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 271,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > GESTÃO COMERCIAL",
    "task": "Configurar e Treinar: Gestão de Limites de Crédito",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Gerente Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "financeiro",
      "vendas"
    ]
  },
  {
    "row": 272,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > GESTÃO COMERCIAL",
    "task": "Configurar e Treinar: Gestão de Reservas Técnicas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Gerente Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 273,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > GESTÃO COMERCIAL",
    "task": "Configurar e Treinar: Gestão de Devolução de Vendas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Gerente Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 274,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > GESTÃO COMERCIAL",
    "task": "Configurar e Treinar: Gestão de Consignações",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Gerente Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 275,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > GESTÃO COMERCIAL",
    "task": "Configurar e Treinar: Gestão de Itens das Consignações",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Gerente Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 276,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > GESTÃO COMERCIAL",
    "task": "Configurar e Treinar: Gestão de Retorno dos Itens Consignação em LOTE",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Gerente Comercial",
    "hours": null,
    "tags": [
      "base",
      "boletos",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 277,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > GESTÃO COMERCIAL",
    "task": "Configurar e Treinar: Consulta de Vendas",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Gerente Comercial",
    "hours": null,
    "tags": [
      "base",
      "crm",
      "vendas"
    ]
  },
  {
    "row": 278,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM ANALÍTICO",
    "task": "Configurar e Treinar: Análise do Ciclo de Vendas",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Diretoria Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "dashboards",
      "vendas"
    ]
  },
  {
    "row": 279,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM ANALÍTICO",
    "task": "Configurar e Treinar: Análise do Volume de Vendas",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Diretoria Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "dashboards",
      "vendas"
    ]
  },
  {
    "row": 280,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM ANALÍTICO",
    "task": "Configurar e Treinar: Analise do Resultado das Vendas",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Diretoria Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "dashboards",
      "vendas"
    ]
  },
  {
    "row": 281,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM ANALÍTICO",
    "task": "Configurar e Treinar: Analise da Atividade das Equipes de Vendas",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Diretoria Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "dashboards",
      "vendas"
    ]
  },
  {
    "row": 282,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM ANALÍTICO",
    "task": "Configurar e Treinar: Analise das Carteiras de Clientes",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Diretoria Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "boletos",
      "crm",
      "dashboards",
      "financeiro",
      "vendas"
    ]
  },
  {
    "row": 283,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM ANALÍTICO",
    "task": "Configurar e Treinar: Analise das Campanhas de Marketing",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Diretoria Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "dashboards",
      "vendas"
    ]
  },
  {
    "row": 284,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM ANALÍTICO",
    "task": "Configurar e Treinar: Analise do Ranking de Clientes",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Diretoria Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "dashboards",
      "vendas"
    ]
  },
  {
    "row": 285,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > CRM ANALÍTICO",
    "task": "Configurar e Treinar: Analise do Ranking de Produtos",
    "process": "",
    "training": false,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Diretoria Comercial",
    "hours": 0.25,
    "tags": [
      "base",
      "crm",
      "dashboards",
      "produtos",
      "vendas"
    ]
  },
  {
    "row": 286,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > GESTÃO DE PDV´s",
    "task": "Configurar e Treinar: Gestão de PDVs",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "TI/Varejo",
    "hours": null,
    "tags": [
      "base",
      "crm",
      "pdv",
      "vendas"
    ]
  },
  {
    "row": 287,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > GESTÃO DE PDV´s",
    "task": "Configurar e Treinar: Sincronização de PDVs",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "TI/Varejo",
    "hours": null,
    "tags": [
      "base",
      "crm",
      "integracoes",
      "pdv",
      "vendas"
    ]
  },
  {
    "row": 288,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > GESTÃO DE PDV´s",
    "task": "Configurar e Treinar: Controle PDV - Produtos",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "TI/Varejo",
    "hours": null,
    "tags": [
      "base",
      "crm",
      "pdv",
      "produtos",
      "vendas"
    ]
  },
  {
    "row": 289,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > GESTÃO DE PDV´s",
    "task": "Configurar e Treinar: Controle PDV - EANs",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "TI/Varejo",
    "hours": null,
    "tags": [
      "base",
      "crm",
      "pdv",
      "vendas"
    ]
  },
  {
    "row": 290,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > GESTÃO DE PDV´s",
    "task": "Configurar e Treinar: Controle PDV - Faturas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "TI/Varejo",
    "hours": null,
    "tags": [
      "base",
      "crm",
      "pdv",
      "vendas"
    ]
  },
  {
    "row": 291,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > GESTÃO DE PDV´s",
    "task": "Configurar e Treinar: Controle do PDV - VALOR",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "TI/Varejo",
    "hours": null,
    "tags": [
      "base",
      "crm",
      "pdv",
      "vendas"
    ]
  },
  {
    "row": 292,
    "phase": "10. CRM - Vendas e Relacionamento",
    "module": "CRM > GESTÃO DE PDV´s",
    "task": "Configurar e Treinar: Gestão de Faturas do PDVs",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "TI/Varejo",
    "hours": null,
    "tags": [
      "base",
      "crm",
      "pdv",
      "vendas"
    ]
  },
  {
    "row": 293,
    "phase": "11. Relatórios",
    "module": "RELATÓRIOS",
    "task": "Apresentar: Relatórios",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "",
    "hours": 0.5,
    "tags": [
      "base",
      "fundacao"
    ]
  },
  {
    "row": 294,
    "phase": "12. Simulação e Homologação",
    "module": "Validação",
    "task": "Simulação de Ciclo Completo de Compras",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Compras + Estoque + Financeiro",
    "hours": null,
    "tags": [
      "base",
      "compras",
      "fundacao"
    ]
  },
  {
    "row": 295,
    "phase": "12. Simulação e Homologação",
    "module": "Validação",
    "task": "Simulação de Ciclo Completo de Vendas",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Vendas + Faturamento + Financeiro",
    "hours": null,
    "tags": [
      "base",
      "fundacao",
      "vendas"
    ]
  },
  {
    "row": 296,
    "phase": "12. Simulação e Homologação",
    "module": "Validação",
    "task": "Simulação de Fechamento Contábil e Fiscal",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Contabilidade + Fiscal",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "fiscal",
      "fundacao"
    ]
  },
  {
    "row": 297,
    "phase": "13. Go-Live e Produção",
    "module": "Sistema",
    "task": "Carga Inicial de Saldos (Estoque, Financeiro, Contábil)",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Consultoria + Contabilidade",
    "hours": null,
    "tags": [
      "base",
      "contabilidade_interna",
      "controladoria",
      "financeiro",
      "fundacao",
      "pcp",
      "produtos"
    ]
  },
  {
    "row": 298,
    "phase": "13. Go-Live e Produção",
    "module": "Sistema",
    "task": "Go-Live: Início da Operação em Produção",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Todos os Key-Users",
    "hours": null,
    "tags": [
      "base",
      "fundacao",
      "pcp"
    ]
  },
  {
    "row": 299,
    "phase": "13. Go-Live e Produção",
    "module": "Sistema",
    "task": "Acompanhamento Pós Go-Live (Semana 1)",
    "process": "",
    "training": true,
    "templatePreloaded": false,
    "templateCreate": false,
    "removeByDefault": false,
    "owner": "Consultoria",
    "hours": null,
    "tags": [
      "base",
      "fundacao",
      "pcp"
    ]
  }
];
