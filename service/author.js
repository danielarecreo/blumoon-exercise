const AuthorDAO = require('../dao/author');

class AuthorService {
  createAuthor(authorDto) { 
    const { authorID, firstName, lastName, penName, birthDate } = authorDto;
   return AuthorDAO.createAuthor(authorID, firstName, lastName, penName, birthDate);
  }
}

module.exports = new AuthorService();