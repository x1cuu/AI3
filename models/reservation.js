const mongoose = require('mongoose');
const User = require('./user'); // Importando o modelo User
const Room = require('./room'); // Importando o modelo Room

// Definindo o esquema da reserva
const reservationSchema = new mongoose.Schema({
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  description: { type: String, required: false },
  
  // Referências para o modelo de User e Room
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
}, {
  timestamps: true, // Adiciona createdAt e updatedAt automaticamente
});

// Criando o modelo de "Reservation"
const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
