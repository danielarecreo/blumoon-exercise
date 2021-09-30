'use strict'

const fastify = require('fastify')

function build(opts={}) {
  const app = fastify(opts)
    app.get('/', async function (request, reply) {
        return ('returns a status code of 200')
    })

    return app
}

module.exports = build 