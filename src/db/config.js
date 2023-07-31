const config = require('../config/')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI_LOCAL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

module.exports = {
  development: {
    url: URI_LOCAL,
    dialect: 'postgres'
  },
  production: {
    url: URI_LOCAL,
    dialect: 'postgres'
  }
}
