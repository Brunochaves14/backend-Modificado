'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /*
      Tickets.belongsTo(models.Vagas, {
        foreignKey: 'vagaTicket_id'
      })
      */
    }
  }
  Tickets.init({
    codigo: DataTypes.STRING,
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Tickets',
  });
  return Tickets;
};