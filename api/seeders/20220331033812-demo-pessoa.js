'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Pessoas', [{
        Nome: "Fulano Beltrano",
        Cpf: "76453728194",
        Rg: "5423123",
        CellNumber: "98992874697",
        Email: "fulano@unifesspa.edu.br",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nome: "Beltrano Cicrano",
        Cpf: "47562381567",
        Rg: "9482733",
        CellNumber: "94991653476",
        Email: "beltrano@unifesspa.edu.br",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nome: "Cricrano Fulano",
        Cpf: "8752861996",
        Rg: "6390531",
        CellNumber: "94992546898",
        Email: "cicrano@unifesspa.edu.br",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Pessoas', null, {});
     
  }
};
