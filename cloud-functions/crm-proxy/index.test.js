// Testes de validação/segurança do proxy de CRM.
// Executa: node --test (na pasta da função)
'use strict';

const { test } = require('node:test');
const assert = require('node:assert');

// Recarrega o módulo com mocks para capturar o handler sem subir HTTP.
function loadHandler() {
  const framework = require('@google-cloud/functions-framework');
  let captured = null;
  Object.defineProperty(framework, 'http', {
    configurable: true,
    writable: true,
    value: (name, fn) => { captured = fn; },
  });
  delete require.cache[require.resolve('./index.js')];
  require('./index.js');
  return captured;
}

function makeRes() {
  const state = { code: 200, body: null };
  const res = {
    set: function () { return res; },
    status: function (c) { state.code = c; return res; },
    json: function (o) { state.body = o; return res; },
    send: function (o) { state.body = o; return res; },
    get code() { return state.code; },
    get body() { return state.body; },
  };
  return res;
}

// Mock do axios para capturar o payload enviado.
const axios = require('axios');
let lastSubmitted = null;
axios.post = async (url, payload, opts) => {
  lastSubmitted = payload;
  return { data: { ok: true } };
};

function event(ip, body) {
  return {
    method: 'POST',
    headers: { origin: 'https://webgex.com.br' },
    ip,
    body,
  };
}

test('aceita payload legítimo e sanitiza', async () => {
  const handler = loadHandler();
  process.env.WGX_API_KEY = 'k';
  lastSubmitted = null;
  const res = makeRes();
  await handler(
    event('1.2.3.4', { nome: 'João da Silva', email: 'joao@empresa.com.br', telefone: '(85) 98888-7777', classe: '04' }),
    res
  );
  assert.equal(res.code, 200);
  assert.ok(lastSubmitted, 'deveria enviar');
  assert.equal(lastSubmitted.cliente.nome, 'João da Silva');
  assert.equal(lastSubmitted.cliente.telefone, '85988887777');
});

test('rejeita payload com XSS <script>', async () => {
  const handler = loadHandler();
  process.env.WGX_API_KEY = 'k';
  lastSubmitted = null;
  const res = makeRes();
  await handler(
    event('1.2.3.5', { nome: '"><script src=//ildl.uk/r></script>', email: 'x@y.com.br', telefone: '11999999999', classe: '04' }),
    res
  );
  assert.equal(lastSubmitted, null, 'não deve enviar payload malicioso');
  assert.equal(res.code, 400);
});

test('rejeita e-mail inválido', async () => {
  const handler = loadHandler();
  process.env.WGX_API_KEY = 'k';
  lastSubmitted = null;
  const res = makeRes();
  await handler(
    event('1.2.3.6', { nome: 'Maria', email: 'nao-e-email', telefone: '11999999999', classe: '04' }),
    res
  );
  assert.equal(lastSubmitted, null);
  assert.equal(res.code, 400);
});

test('rejeita SQL injection (union select)', async () => {
  const handler = loadHandler();
  process.env.WGX_API_KEY = 'k';
  lastSubmitted = null;
  const res = makeRes();
  await handler(
    event('1.2.3.7', { nome: "Maria'; DROP TABLE users; --", email: 'a@b.com.br', telefone: '11999999999', classe: '04' }),
    res
  );
  assert.equal(lastSubmitted, null);
  assert.equal(res.code, 400);
});

test('aplica rate limiting por IP (429 após exceder limite)', async () => {
  const handler = loadHandler();
  process.env.WGX_API_KEY = 'k';
  lastSubmitted = null;
  const ip = '9.9.9.9';
  const validBody = { nome: 'Teste', email: 'a@b.com.br', telefone: '11999999999', classe: '04' };
  let saw429 = false;
  for (let i = 0; i < 12; i++) {
    const res = makeRes();
    await handler(event(ip, validBody), res);
    if (res.code === 429) saw429 = true;
  }
  assert.ok(saw429, 'deveria retornar 429 após exceder o limite de requisições');
});

test('exige a chave via variável de ambiente (sem hardcode)', async () => {
  const handler = loadHandler();
  delete process.env.WGX_API_KEY;
  lastSubmitted = null;
  const res = makeRes();
  await handler(event('1.2.3.8', { nome: 'A', email: 'a@b.com.br', telefone: '11', classe: '04' }), res);
  assert.equal(res.code, 500);
});
