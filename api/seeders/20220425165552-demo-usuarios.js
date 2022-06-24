'use strict';

const bcryptjs = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Usuarios', [{
      Email: "cicrano@unifesspa.edu.br",
      Senha: await bcryptjs.hash("1adfgvas", 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
