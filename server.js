// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

const authors_list = require('./authors')

//return list of authors
fastify.get('/authors', (req, reply) => {
  reply.send(authors_list)
})

//adds an author on the list
fastify.post('/add_author', (req, reply) => {
  reply.send(authors_list)
})

//updates an author on the list
fastify.put('/update_author', (req, reply) => {
  
})

//removes an author on the list
fastify.delete('/remove_author', (req, reply) => {
  
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