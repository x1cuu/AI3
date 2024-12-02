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

exports.viewReservations = (req, res) => {
  res.status(501).json({ message: 'Endpoint não implementado' }); // Implementar lógica(por implementar)
};

exports.editReservation = (req, res) => {
  res.status(501).json({ message: 'Endpoint não implementado' }); // Implementar lógica
};

exports.cancelReservation = (req, res) => {
  res.status(501).json({ message: 'Endpoint não implementado' }); // Implementar lógica
};
