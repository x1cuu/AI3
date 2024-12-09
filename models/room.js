const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Room = sequelize.define('Room', {
  name: { type: DataTypes.STRING, allowNull: false },
  capacity: { type: DataTypes.INTEGER, allowNull: false },
  equipment: { type: DataTypes.JSON, allowNull: true },
});

module.exports = Room;
