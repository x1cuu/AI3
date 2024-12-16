const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Definindo o esquema do usuário
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }, // Papel padrão é 'user'
});

// Método para comparar senhas
userSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

// Cria o modelo do usuário no MongoDB
const User = mongoose.model('User', userSchema);

module.exports = User;
