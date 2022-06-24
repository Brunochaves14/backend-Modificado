'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vagas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /*
      Vagas.hasOne(models.Veiculos, {
        foreignKey: 'vagaVeiculo_id'
      })
      Vagas.hasOne(models.Tickets, {
        foreignKey: 'vagaTicket_id'
      })
      */
    }
  }
  Vagas.init({
    setor: DataTypes.STRING,
    disponivel: DataTypes.BOOLEAN,
    numero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vagas',
  });
  return Vagas;
};