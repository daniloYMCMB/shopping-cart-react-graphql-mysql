const Sequelize = require("sequelize");

module.exports = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    username: {
        type: Sequelize.STRING(35),
        allowNull: false,
    },
    passwd: {
        type: Sequelize.STRING(25),
        allowNull: false,
    },
});