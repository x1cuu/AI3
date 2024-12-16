const mongoose = require('mongoose');

// Definindo o esquema da sala
const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  equipment: { type: [mongoose.Schema.Types.Mixed], required: false }, // Usando Mixed para JSON
}, {
  timestamps: true, // Adiciona createdAt e updatedAt automaticamente
});

// Criando o modelo de "Room" no MongoDB
const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
