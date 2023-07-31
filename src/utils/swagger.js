const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API docs',
      version: '1.0.0'
    }
  },
  apis: ['./src/routes/*.js', './src/schemas/*.js']
}

const swaggerSpec = swaggerJsdoc(options)

const swaggerDocs = (app, port) => {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}

module.exports = swaggerDocs
