const { Model, DataTypes } = require('sequelize')

const PERSON_TABLE = 'persons'

const PersonSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'first_name'
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name'
  }
}

class Person extends Model {
  static associate (models) {
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: PERSON_TABLE,
      modelName: 'Person',
      timestamps: false
    }
  }
}

module.exports = { Person, PERSON_TABLE, PersonSchema }
