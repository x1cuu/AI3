const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./user');
const Room = require('./room');

const Reservation = sequelize.define('Reservation', {
  startTime: { type: DataTypes.DATE, allowNull: false },
  endTime: { type: DataTypes.DATE, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: true },
});

Reservation.belongsTo(User, { foreignKey: 'userId' });
Reservation.belongsTo(Room, { foreignKey: 'roomId' });

module.exports = Reservation;
