const Joi = require('joi')

const id = Joi.number()
const firstName = Joi.string()
const lastName = Joi.string()

class PersonSchema {
  create = Joi.object({
    firstName: firstName.required(),
    lastName: lastName.required()
  })

  find = Joi.object({
    id: id.required()
  })
}

module.exports = new PersonSchema()
