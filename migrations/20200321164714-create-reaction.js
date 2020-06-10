'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Users', // name of Target model
        //   key: 'id', // key in Target model that we're referencing
        // },
        // onDelete: 'CASCADE',
        // allowNull: false,
      },
      userIp: {
        type: Sequelize.STRING
      },
      postId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Posts', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onDelete: 'CASCADE',
        allowNull: true,
      },
      commentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Comments', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onDelete: 'CASCADE',
        allowNull: true,
      },
      reactionType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reactions');
  }
};
