'use strict';

const fastify = require('fastify');

function build (opts = {}) {
  const app = fastify(opts);

  app.get('/authors', async function (request, reply) {
    return ('returns a status code of 200 for /authors');
  });

  app.post('/add_author', async function (request, reply) {
    return ('returns a status code of 200 for /add_author');
  });

  app.put('/update_author', async function (request, reply) {
    return ('returns a status code of 200 for /update_author');
  });

  app.delete('/remove_author', async function (request, reply) {
    return ('returns a status code of 200 for /remove_author');
  });

  return app;
}

module.exports = build;
