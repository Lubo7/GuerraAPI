'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('bandos', [{
        id: 1,
        nombre: 'Rojo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        nombre: 'Azul',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        nombre: 'Amarillo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        nombre: 'Blanco',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        nombre: 'Negro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('bandos', null, {});
    
  }
};
