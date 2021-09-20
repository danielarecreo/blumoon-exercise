'use strict'

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

server.listen(3000, (err, address) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
})