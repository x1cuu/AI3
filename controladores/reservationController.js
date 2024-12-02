const Reservation = require('../models/reservation');

const createReservation = async (req, res) => {
  try {
    const { roomId, startTime, endTime, description } = req.body;
    const userId = req.userId; // Pegue do middleware de autenticação
    const reservation = new Reservation({ userId, roomId, startTime, endTime, description });

    await reservation.save();
    res.status(201).json({ message: 'Reservation created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const viewReservations = async (req, res) => {
  try {
    const { roomId, startTime, endTime } = req.query;
    const filter = {};
    if (roomId) filter.roomId = roomId;
    if (startTime) filter.startTime = { $gte: new Date(startTime) };
    if (endTime) filter.endTime = { $lte: new Date(endTime) };

    const reservations = await Reservation.find(filter).populate('roomId userId');
    res.json({ reservations });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createReservation, viewReservations };
