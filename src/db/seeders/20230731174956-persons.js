'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('persons', [{
      first_name: 'John',
      last_name: 'Doe'
    }, {
      first_name: 'Jorge',
      last_name: 'Olaizola'
    }, {
      first_name: 'Lionel',
      last_name: 'Messi'
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('persons', null, {})
  }
}
