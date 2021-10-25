'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     
     await queryInterface.bulkInsert('estado', [{
        id: 1,
        id_pais: "3", 
        id_independencia: "1", 
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
},

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('estado', null, {});
    
  }
};
