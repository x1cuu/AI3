const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definindo o esquema do usuário
const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }  // Papel padrão
});

// Criando o modelo
const User = mongoose.model('User', userSchema);

module.exports = User;
