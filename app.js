'use strict'

const fastify = require('fastify')

function build(opts={}) {
  const app = fastify(opts)
    app.get('/authors', async function (request, reply) {
        return ('returns a status code of 200')
    })

    app.post('/add_author', async function (request, reply) {
        return ('returns a status code of 200')
    })

    app.put('/update_author', async function (request, reply) {
        return ('returns a status code of 200')
    })

    app.delete('/remove_author', async function (request, reply) {
        return ('returns a status code of 200')
    })
  
    return app
}
  
module.exports = build