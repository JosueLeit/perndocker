'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Task', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      deadlineDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      priority: {
        type: Sequelize.ENUM('high', 'normal', 'low'),
        allowNull: false
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'User',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      projectId: {
        type: Sequelize.UUID,
        references: {
          model: 'Project',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      status: {
        type: Sequelize.ENUM('pending', 'completed', 'unsigned'),
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Task');
  }
};

