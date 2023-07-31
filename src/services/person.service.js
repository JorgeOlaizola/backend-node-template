const boom = require('@hapi/boom')
const sequelize = require('../db/sequelize')

const { models } = sequelize

class PersonService {
  async create (data) {
    const person = await models.Person.create(data)
    return person
  }

  async find (id) {
    const person = await models.Person.findByPk(id)
    if (!person) throw boom.notFound('Person not found')
    return person
  }

  async list () {
    return models.Person.findAll()
  }
}

module.exports = new PersonService()
