const authorService = require('../service/author');

class AuthorController {
  async createAuthor(req, res) {
    try {
        const id = await authorService.createAuthor(req.body);
        res.status(201).json(id);
    } catch (err) {
        console.error(err);
    }
  }

  async listAuthor(req, res) {
    try {
      const users = await authorService.listAuthor(req.body);
      res.json({users});
    } catch (err) {
        console.error(err);
    }
  }
}

module.exports = new AuthorController();