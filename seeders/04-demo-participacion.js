'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('participacion', [{
        id: 1,
        id_guerra: 1,
        id_bando: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        id_guerra: 1,
        id_bando: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        id_guerra: 2,
        id_bando: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        id_guerra: 2,
        id_bando: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        id_guerra: 3,
        id_bando: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        id_guerra: 3,
        id_bando: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        id_guerra: 3,
        id_bando: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('participacion', null, {});
    
  }
};
