'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('paises', [{
      id: 1,
      nombre: 'Ukrania',
      id_bando: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      nombre: 'Slovakia',
      id_bando: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      nombre: 'España',
      id_bando: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      nombre: 'Portugal',
      id_bando: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      nombre: 'Francia',
      id_bando: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      nombre: 'Alemania',
      id_bando: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 7,
      nombre: 'Noruega',
      id_bando: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 8,
      nombre: 'Latvia',
      id_bando: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 9,
      nombre: 'Estonia',
      id_bando: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 10,
      nombre: 'Japon',
      id_bando: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 11,
      nombre: 'Venezuela',
      id_bando: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 12,
      nombre: 'Kongo',
      id_bando: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 13,
      nombre: 'Egipto',
      id_bando: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 14,
      nombre: 'Afganistan',
      id_bando: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 15,
      nombre: 'India',
      id_bando: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }    
  ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('paises', null, {});
    
  }
};
