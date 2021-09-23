const { default: fastify } = require('fastify');
const authorsDAL = require('./authorsDAL');
const db = require('./db/db');

const authorsData = authorsDAL(fastify.db);

module.exports = async function (fastify, opts) {
  fastify.decorate('utility', function () {
    return 'Decorators';
  });

  fastify.get('/', async function (request, reply) {
    return { result: `ok with ${this.utility()}` };
  });

  const authorController = require('./controller/author');

  //working, with error "Promise may not be fulfilled with 'undefined' when statusCode is not 204"
  fastify.post('/authors', authorController.createAuthor);

//   fastify.get('/author_list', async function (request, response) {
//     const users = await knex('users')
//     response.json({users});
// });

  const knex = require('knex');

  fastify.decorate('db', db);

  fastify.get('/author_list', async (request, response) => {
    const users = await knex.schema.raw(`SELECT * FROM authors`)
    response.json({users: users.rows});
 });

  fastify.route({
    method: 'GET',
    url: '/list_author',
    schema: {
      response: {
        200: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' }
            }
          }
        }
      }
    },
    handler: async (req, reply) => {
      return authorsData.getAuthors();
    }
  })

};
