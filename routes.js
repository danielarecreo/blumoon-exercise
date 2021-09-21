module.exports = async function routes (fastify, opts) {
  fastify.decorate('utility', function () {
    return 'Decorators';
  });

  fastify.get('/', async function (request, reply) {
    return { test: `returns a status code of 200 ${this.utility()}` };
  });

  const authorController = require('./controller/author');

  //working, with error "Promise may not be fulfilled with 'undefined' when statusCode is not 204"
  fastify.post('/authors', authorController.createAuthor);

};
