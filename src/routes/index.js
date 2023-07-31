const express = require('express')
const personsRouter = require('./persons.routes')

function routerApi (app) {
  const router = express.Router()
  app.use('/api', router)
  router.use('/persons', personsRouter)
}

module.exports = routerApi
