'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('participacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_bando: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'bandos',
          key: 'id'
      },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_guerra: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'guerras',
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
    await queryInterface.dropTable('participacions');
  }
};