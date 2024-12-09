const Reservation = require('../models/reservation');

// Visualizar reservas
exports.viewReservations = async (req, res) => {
  try {
    const { roomId, startTime, endTime } = req.query;
    const query = {};

    if (roomId) query.roomId = roomId;
    if (startTime) query.startTime = { $gte: new Date(startTime) };
    if (endTime) query.endTime = { $lte: new Date(endTime) };

    const reservations = await Reservation.find(query);
    res.status(200).json({ reservations });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Editar uma reserva
exports.editReservation = async (req, res) => {
  try {
    const { reservationId } = req.params;
    const updates = req.body;

    const updatedReservation = await Reservation.findByIdAndUpdate(reservationId, updates, { new: true });
    if (!updatedReservation) return res.status(404).json({ message: 'Reserva não encontrada' });

    res.status(200).json({ message: 'Reserva atualizada com sucesso', reservation: updatedReservation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Cancelar uma reserva
exports.cancelReservation = async (req, res) => {
  try {
    const { reservationId } = req.params;

    const canceledReservation = await Reservation.findByIdAndDelete(reservationId);
    if (!canceledReservation) return res.status(404).json({ message: 'Reserva não encontrada' });

    res.status(200).json({ message: 'Reserva cancelada com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
