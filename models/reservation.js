const mongoose = require('mongoose');
const User = require('./user'); 
const Room = require('./room'); 

const reservationSchema = new mongoose.Schema({
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  description: { type: String, required: false },
  
  // Referências para o modelo de User e Room
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
}, {
  timestamps: true, 
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
