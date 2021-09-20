exports.up = function (knex, Promise) {
    return knex.schema.createTable('books', function (table) {
      table.increments('bookID');
      table.string('authorID');
      table.string('title');
      table.string('description');
      table.date('publishYear');
    });
  };
  
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('books');
};