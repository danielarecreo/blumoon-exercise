// 'use strict'

// const { default: fastify } = require('fastify')

// const server = require('./app')({
//   logger: {
//     level: 'info',
//     // prettyPrint: true
//   }
// })

// fastify.register(server)

// server.listen(3000, (err) => {
//   if (err) {
//     console.log(err)
//     process.exit(1)
//   }
// })

const fastify = require("fastify")({
  logger: true,
})

const routes = require("./routes");

fastify.register(routes)

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