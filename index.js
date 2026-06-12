// Cloud Function para receber dados do formulário e enviar para a Webgex

const { http } = require('@google-cloud/functions-framework');
const axios = require('axios');

http('helloHttp', async (req, res) => {
  // 1. Configura o CORS para permitir que seu site acesse esta função
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  // Trata a requisição de pré-verificação (OPTIONS) do navegador
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  // 2. Chave da API e URL (Protegidas aqui no servidor do Google)
  const apiKey = 'GxwNmHX2CI49Agtut-NksRWcpY9OCadCuTVF_SQqOS0';
  const apiUrl = 'https://api-v2.webgex.com.br/erp-oportunidades';

  try {
    const { nome, email, telefone, classe } = req.body;
    
    // Gera datas automáticas
    const dataAtual = new Date();
    const today = dataAtual.toISOString().split('T')[0];
    const horaAtual = dataAtual.toLocaleTimeString('pt-BR', { timeZone: 'America/Fortaleza' });
    const cleanPhone = telefone.replace(/\D/g, '');

    // 3. Monta o Payload conforme sua especificação técnica
    const payload = {
      "codigoUnidade": "10001",
      "situacao": "E0",
      "valor": 175,
      "codigoVendedor": "51",
      "dataAbertura": today,
      "horaAbertura": horaAtual,
      "dataFechamento": today,
      "horaFechamento": "23:59:59",
      "codigoLotacao": "11",
      "classe": String(classe),
      "origem": "03",
      "enviaPDV": false,
      "cliente": {
        "cpfCnpj": "ISENTO",
        "nome": nome,
        "email": email,
        "telefone": cleanPhone,
        "celular": cleanPhone,
        "emailMarketing": email
      },
      "itens": [{
        "idProduto": "S000002",
        "quantidade": 1,
        "valorUnitario": 175,
        "percentualValorDesconto": 0,
        "valorDesconto": 0,
        "valorTotal": 175
      }],
      "pagamentos": [{
        "finalizadora": "DIN",
        "prazo": "1X",
        "valor": 175,
        "vencimento": today
      }]
    };

    // 4. Envia para a Webgex usando Axios
    const response = await axios.post(apiUrl, payload, {
      headers: {
        'Content-Type': 'application/json',
        'WGX-API-KEY': apiKey
      }
    });

    res.status(200).json({ success: true, data: response.data });

  } catch (error) {
    console.error('Erro na integração:', error.response ? error.response.data : error.message);
    // Retornamos 200 para o navegador para não gerar erro de console, mesmo se a API falhar
    res.status(200).json({ success: false, error: 'Erro interno na integração' });
  }
});