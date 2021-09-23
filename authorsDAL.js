const { default: knex } = require("knex");

const authorsDAL = () => {
    const getAuthors = () => {
        return knex.raw('SELECT authorID, firstName FROM authors');
    }

    return { getAuthors };
};

module.exports = authorsDAL;
