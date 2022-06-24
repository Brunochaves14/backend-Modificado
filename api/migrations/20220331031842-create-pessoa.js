'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pessoas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nome: {
        type: Sequelize.STRING
      },
      Cpf: {
        type: Sequelize.STRING
      },
      Rg: {
        type: Sequelize.STRING
      },
      CellNumber: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      /*
      veiculo_pessoa_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'veiculo', key:'id'}
        
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
    await queryInterface.dropTable('Pessoas');
  }
};