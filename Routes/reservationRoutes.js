const express = require('express');
const { createReservation, viewReservations } = require('../controladores/reservationController');
const { authenticate } = require('../middleware/authenticate');
const router = express.Router();


// Rotas de reservas
router.post('/create', reservationController.createReservation); // Criar reserva
router.get('/view', reservationController.viewReservations); // Consultar reservas(por implementar)
router.put('/:id', reservationController.editReservation); // Atualizar reserva
router.delete('/:id', reservationController.cancelReservation); // Cancelar reserva

module.exports = router;
