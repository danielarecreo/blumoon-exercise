//database access object

const db = require('../db/db');

class AuthorDAO {
   async createAuthor(authorID, firstName, lastName, penName, birthDate) {
        const [id] = await db('authors')
          .insert({
            authorID: authorID,
            firstName: firstName,
            lastName: lastName,
            penName: penName,
            birthDate: birthDate
        })
        .returning('id');

        return id;
    }
}

module.exports = new AuthorDAO();