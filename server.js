const fastify = require('fastify')({
  logger: true
});

const dbconnector = require('./db/db');
const routes = require('./routes');

fastify.register(dbconnector);
fastify.register(routes);

fastify.addHook('onClose', (_instance, done) => {
  dbconnector.close();
  done();
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
