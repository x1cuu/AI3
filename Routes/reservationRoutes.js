const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// Rotas de reservas
router.post('/create', reservationController.createReservation); // Criar reserva
router.get('/view', reservationController.viewReservations); // Consultar reservas
router.put('/:id', reservationController.updateReservation); // Atualizar reserva
router.delete('/:id', reservationController.deleteReservation); // Cancelar reserva

module.exports = router;
