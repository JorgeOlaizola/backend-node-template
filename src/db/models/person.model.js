const { Model } = require('objection')

class Person extends Model {
  static get tableName () {
    return 'person'
  }

  fullName () {
    return this.firstName + ' ' + this.lastName
  }

  // static get modifiers () {
  //   return {
  //     omitDeletedAt (builder) {
  //       builder.select('*').whereNull('deletedAt')
  //     }
  //   }
  // }

  // static query (...args) {
  //   return super.query(...args).modify('omitDeletedAt')
  // }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['firstName', 'lastName'],

      properties: {
        id: { type: 'integer' },
        firstName: { type: 'string', minLength: 1, maxLength: 255 },
        lastName: { type: 'string', minLength: 1, maxLength: 255 }
      }
    }
  }

  // static get relationMappings () {
  //   return {
  //     week: {
  //       relation: Model.HasManyRelation,
  //       modelClass: Week,
  //       join: {
  //         from: 'employee.weekId',
  //         to: 'week.id'
  //       }
  //     }
  //   }
  // }
}

module.exports = Person
