const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/files/sequelize.config");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
