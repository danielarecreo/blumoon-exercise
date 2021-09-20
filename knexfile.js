// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'exercise',
      user:     'postgres',
      password: 'blumoon'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
