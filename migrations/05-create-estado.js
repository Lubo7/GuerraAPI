'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('estados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pais: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'pais',
          key: 'id'
      },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_independencia: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'independencia',
          key: 'id'
      },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('estados');
  }
};