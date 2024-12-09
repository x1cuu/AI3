const Reservation = require('../models/reservation');

exports.createReservation = async (req, res) => {
  try {
    const { roomId, startTime, endTime, description } = req.body;
    const userId = req.userId; // Pegue o ID do usuário autenticado.

    const reservation = await Reservation.create({ userId, roomId, startTime, endTime, description });
    res.status(201).json({ reservationId: reservation.id, message: 'Reserva criada com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
