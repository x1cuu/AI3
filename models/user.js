const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Ajuste o caminho para o arquivo de configuração do Sequelize

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'user' }, // Adicionado
});

module.exports = User;
