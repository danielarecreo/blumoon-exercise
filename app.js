'use strict';

const fastify = require('fastify')
const fp = require('fastify-plugin')

function build(fp, opts={}) {
  const app = fastify(opts)

  fp.decorate("utility", function() {
    return "Decorators are super neat";
  });

  // app.get('/authors', async function (request, reply) {
  //   return ('returns a status code of 200 for /authors');
  // });

  // app.post('/add_author', async function (request, reply) {
  //   return ('returns a status code of 200 for /add_author');
  // });

  // app.put('/update_author', async function (request, reply) {
  //   return ('returns a status code of 200 for /update_author');
  // });

  // app.delete('/remove_author', async function (request, reply) {
  //   return ('returns a status code of 200 for /remove_author');
  // });


    app.get('/', async function (request, reply) {
        return (`returns a status code of 200 ${this.utility()}` );
    })
  
    return app
}
  
module.exports = build;
