module.exports = async function routes (fastify, opts) {
  fastify.decorate('utility', function () {
    return 'Decorators';
  });

  fastify.get('/', async function (request, reply) {
    return { test: `returns a status code of 200 ${this.utility()}` };
  });
};
