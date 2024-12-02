const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  description: { type: String, required: true },
});

reservationSchema.index({ roomId: 1, startTime: 1, endTime: 1 }, { unique: true });

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
