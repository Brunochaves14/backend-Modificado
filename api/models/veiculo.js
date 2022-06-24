'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculos extends Model {
    
    static associate(models) {
      /*
      Veiculos.belongsTo(models.Vagas,{
        foreignKey: 'vagaVeiculo_id'
      })

      Veiculos.belongsTo(models.Pessoas, {
        foreignKey: 'donoVeiculo_id'
      })
      */
    }
  }
  Veiculos.init({
    placa: DataTypes.STRING,
    tipo: DataTypes.STRING,
    cor: DataTypes.STRING,
    modelo: DataTypes.STRING,
    fabricante: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'Veiculos',
  });
  return Veiculos;
};