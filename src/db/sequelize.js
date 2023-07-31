const { Sequelize } = require('sequelize')
const config = require('../config/')
const setupModels = require('./models')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI_LOCAL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI_LOCAL, {
  dialect: 'postgres',
  logging: false
})

setupModels(sequelize)

module.exports = sequelize
