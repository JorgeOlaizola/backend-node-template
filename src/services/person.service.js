const boom = require('@hapi/boom')
const Person = require('../db/models/person.model.js')

class PersonService {
  async create (data) {
    const person = await Person.query().insert({ ...data })
    return person
  }

  async find (id) {
    const person = await Person.query().findById(id)
    if (!person) throw boom.notFound('Persond not found')
    return person
  }

  async list () {
    return Person.query()
  }
}

module.exports = new PersonService()
