use strict;

const fastify = require("fastify")({
  logger: true,
})

const { strict } = require("assert/strict");
const routes = require("./routes");

fastify.register(routes)

fastify.addHook('onClose', (reply, done) => {
    reply('close server')
  done()
})

const start = async () => {
  try {
    await fastify.listen(3000);
  }
  catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
