'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('independencia', [{
        id: 1,
        estado: 1,
        fecha_inicio: "2067-05-05", 
        fecha_fin: "2540-03-03", 
        createdAt: new Date(),
        updatedAt: new Date()
     }, 
     {
       id: 2,
       estado: 1,
       fecha_inicio: "2052-03-18", 
       fecha_fin: "2282-06-24", 
       createdAt: new Date(),
       updatedAt: new Date()
    },
    {
      id: 3,
      estado: 1,
      fecha_inicio: "2083-12-02", 
      fecha_fin: "2312-09-16", 
      createdAt: new Date(),
      updatedAt: new Date()
    }
      ], {});
    
  },

   down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('independencia', null, {});
     
  }
};
