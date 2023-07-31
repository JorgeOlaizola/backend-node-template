const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const { boomErrorHandler, errorHandler } = require('./middlewares/error.handler')
const routerApi = require('./routes')
const swaggerDocs = require('./utils/swagger')
const { port } = require('./config')
const boom = require('@hapi/boom')

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

swaggerDocs(app, port)
routerApi(app)

app.get('/', (req, res) => {
  res.send('Welcome to REST API Template.')
})

app.get('*', (req, res) => {
  throw boom.notFound('Route not found')
})

app.use(boomErrorHandler)
app.use(errorHandler)

module.exports = app
