// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

const authors_list = require('./authors')

fastify.get('/authors', (req, reply) => {
  reply.send(authors_list)
})

fastify.delete('/authors', (req, reply) => {
  
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()