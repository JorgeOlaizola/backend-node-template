const { Person, PersonSchema } = require('./person.model')

const setupModels = (sequelize) => {
//   const { models } = sequelize

  Person.init(PersonSchema, Person.config(sequelize))
//   Person.associate(models)
}

module.exports = setupModels
