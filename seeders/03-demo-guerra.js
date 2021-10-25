'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('guerra', [{
      id: 1,
      nombre: 'Decima guerra mundial',
      fecha_inicio: "2045-05-05",
      fecha_fin: "2647-05-01",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      nombre: 'Quinta guerra mundial',
      fecha_inicio: "2523-07-04",
      fecha_fin: "2547-09-11",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      nombre: '100 años de guerra',
      fecha_inicio: "2223-07-09",
      fecha_fin: "2323-09-09",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
  ], {});
  
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('guerra', null, {});
    
  }
};
