'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
          type: Sequelize.STRING(35),
          allowNull: false,
      },
      passwd: {
          type: Sequelize.STRING(25),
          allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
