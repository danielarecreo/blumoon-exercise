'use strict'

const fastify = require('fastify')
const fp = require('fastify-plugin')

function build(fp, opts={}) {
  const app = fastify(opts)

  fp.decorate("utility", function() {
    return "Decorators are super neat";
});


    app.get('/', async function (request, reply) {
        return (`returns a status code of 200 ${this.utility()}` );
    })
  
    return app
}
  
module.exports = build

// module.exports = async function build(fastify, opts) {
//     fastify.decorate("utility", function() {
//         return "Decorators are super neat";
//     });

//     fastify.get('/', async function (request, reply) {
//         return (`returns a status code of 200 ${this.utility()}` );
//     })
// }