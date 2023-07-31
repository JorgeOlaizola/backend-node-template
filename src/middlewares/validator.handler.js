const boom = require('@hapi/boom')

const validatorHandler = (schema, property) => {
  return (req, _res, next) => {
    const data = req[property]
    const { error } = schema.validate(data, { abortEarly: false })
    if (error) {
      next(boom.badRequest(error.message))
    }
    next()
  }
}

module.exports = validatorHandler
