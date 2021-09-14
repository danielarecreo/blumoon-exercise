
exports.up = function (knex, Promise) {
  return knex.schema.createTable('shelves', function (table) {
    table.increments('levelID');
    table.string('bookID');
    table.string('category');
    table.string('location');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('shelves');
};
