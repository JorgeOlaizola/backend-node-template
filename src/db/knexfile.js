require('dotenv').config({ path: '../../.env' })
const { dbName, dbUser, dbPassword, dbPort, dbHost } = require('../config')
const { knexSnakeCaseMappers } = require('objection')
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: dbHost,
      database: dbName,
      user: dbUser,
      password: dbPassword,
      port: dbPort
    },
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: './seeds'
    },

    ...knexSnakeCaseMappers()
  }
  //   production: {
  //     client: 'postgresql',
  //     connection: {
  //       database: 'my_db',
  //       user:     'username',
  //       password: 'password'
  //     },
  //     pool: {
  //       min: 2,
  //       max: 10
  //     },
  //     migrations: {
  //       tableName: 'knex_migrations'
  //     }
  //   }
}
