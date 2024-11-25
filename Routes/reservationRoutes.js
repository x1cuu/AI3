const express = require('express');
const router = express.Router();

// Importação do controlador
const reservationController = require('../controllers/reservationController');

// Endpoints para gestão de reservas
router.post('/', reservationController.create); // Criar uma nova reserva
router.get('/', reservationController.getAll); // Consultar todas as reservas
router.get('/:id', reservationController.getById); // Consultar uma reserva específica
router.put('/:id', reservationController.update); // Editar uma reserva
router.delete('/:id', reservationController.delete); // Cancelar uma reserva

module.exports = router;
