exports.up = function (knex, Promise) {
  return knex.schema.createTable('authors', function (table) {
    table.increments('authorID');
    table.string('firstName');
    table.string('lastName');
    table.string('penName');
    table.date('birthDate');
  });
};

exports.down = function (knex, Promise) {
  knex.schema.dropTable('authors');
};
