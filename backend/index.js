const express = require('express');

const app = express();

app.use(express.json());

/**
 * GET: Buscar/Listar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

app.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Cleiton'
  });
});

app.listen(3333);