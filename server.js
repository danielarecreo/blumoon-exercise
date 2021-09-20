const fastify = require("fastify")({
  logger: true,
})

const routes = require("./routes");

fastify.register(routes)

fastify.addHook('onClose', (instance, done) => {
  // code

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

// fastify.close()

start();
