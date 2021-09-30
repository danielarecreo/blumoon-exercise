async function routes(fastify, options) {  
  //Access our client instance value from our decorator
  const client = fastify.db.client
  const { allAuthors, addAuthor, updateAuthor, deleteAuthor } = require('./schemas')

  const { v4: uuidv4 } = require('uuid');

  //returns list of authors
  fastify.get('/', {schema: allAuthors}, async function (request, reply) { 
    try { 
        const {rows} = await client.query('SELECT * FROM authors') 
        console.log(rows) 
        reply.send(rows) 
    } catch(err) { 
        throw new Error(err) 
    } 
  })

  //adds an author to the list
  fastify.post('/add-author', {schema: addAuthor}, async function(request, reply) {
    const {firstName, lastName, penName, birthDate} = request.body
    const id = uuidv4()

    const query = {
        text: `INSERT INTO authors (id, firstName, lastName, penName, birthDate)
          VALUES($1, $2, $3, $4, $5 ) RETURNING *`,
        values: [id, firstName, lastName, penName, birthDate], //column firstname of relation authors does not exist
    }
           
    try {
      const {rows} = await client.query(query)
        console.log(rows[0])
        reply.code(201)
        return {created: true}
    } catch (err) {
      throw new Error(err)
    }
  })

  //updates an author on the list
  fastify.patch('/update-author/:id',{schema: updateAuthor}, async function (request, reply) {
    const id = request.params.id
    const {firstName, lastName, penName, birthDate} = request.body
    const query = {
            text:  `UPDATE authors SET 
                            firstName = COALESCE($1, firstName), 
                            lastName = COALESCE($2, "lastName"), 
                            penName = COALESCE($3, penName),
                            birthDate = COALESCE($4, birthDate)  
                            WHERE id = $5 RETURNING *`,
            values : [firstName, lastName, penName, birthDate, id] //firstName does not exist
    }
    try {
            const {rows} = await client.query(query)
            console.log(rows[0])
            reply.code(204)
    } catch (err) {
            throw new Error(err)
    }
  })

  //removes an author on the list
  fastify.delete('/delete-author', {schema: deleteAuthor}, async function(request, reply) {
    console.log(request.params)
    try {
            const {rows} = await client.query(`DELETE FROM authors
            WHERE id = $1 RETURNING *`, [request.params.id])
            console.log(rows[0])
            reply.code(204)
    } catch(err) {
            throw new Error(err)
    }
  })

}

module.exports= routes
