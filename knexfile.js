// Update with your config settings.

module.exports = {

  development: {
    client: 'pg', //tipo do banco SQLM PG MongoDB
    connection: {
      database: 'knex_test', //nome do banco de dados
      user: 'postgres', //user do banco
      password: 'wiuver5421', //senha do banco
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`, // caminho para a criação das migrations
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`, // caminho para a criação das migrations

    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
