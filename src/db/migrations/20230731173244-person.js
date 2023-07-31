'use strict'

const { PERSON_TABLE } = require('../models/person.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, sequelize) {
    await queryInterface.createTable(PERSON_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.DataTypes.INTEGER
      },
      firstName: {
        allowNull: false,
        type: sequelize.DataTypes.STRING,
        field: 'first_name'
      },
      lastName: {
        allowNull: false,
        type: sequelize.DataTypes.STRING,
        field: 'last_name'
      }

    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PERSON_TABLE)
  }
}
