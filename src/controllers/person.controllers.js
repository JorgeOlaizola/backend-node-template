const PersonService = require('../services/person.service')

class PersonControllers {
  async create (req, res, next) {
    const person = await PersonService.create(req.body)
    res.json(person)
  }

  async find (req, res, next) {
    const person = await PersonService.find(req.params.id)
    res.json(person)
  }

  async list (req, res, next) {
    const persons = await PersonService.list()
    res.json(persons)
  }
}

module.exports = new PersonControllers()
