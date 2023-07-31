const boomErrorHandler = (err, _req, res, next) => {
  if (err.isBoom) {
    const { output } = err
    return res.status(output.statusCode).json(output.payload)
  } else next(err)
}

const errorHandler = (req, res) => {
  return res.status(500).json({
    message: 'error'
  })
}

module.exports = { errorHandler, boomErrorHandler }
