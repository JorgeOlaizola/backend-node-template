const server = require('./src/app.js')
const { port } = require('./src/config')

server.listen(port, () => {
  console.log(`App running on port ${port}`)
})
