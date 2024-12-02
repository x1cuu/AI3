const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// Rotas de reservas
router.post('/create', reservationController.createReservation); // Criar reserva
router.get('/view', reservationController.viewReservations); // Consultar reservas(por implementar)
router.put('/:id', reservationController.editReservation); // Atualizar reserva
router.delete('/:id', reservationController.cancelReservation); // Cancelar reserva

module.exports = router;
