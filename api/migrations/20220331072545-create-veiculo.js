'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Veiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      placa: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      cor: {
        type: Sequelize.STRING
      },
      modelo: {
        type: Sequelize.STRING
      },
      fabricante: {
        type: Sequelize.STRING
      },
      /*
      vagaVeiculo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'Vagas', key:'id'}
      },
    
      donoVeiculo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'Pessoas', key:'id'}
      },
      */
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Veiculos');
  }
};