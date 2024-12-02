const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// Rotas de salas
router.post('/create', roomController.createRoom); // Criar sala
router.put('/:id', roomController.editRoom); // Atualizar sala
router.delete('/:id', roomController.deleteRoom); // Excluir sala

module.exports = router;
