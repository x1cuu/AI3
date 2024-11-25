const express = require('express');
const router = express.Router();

// Importação do controlador
const roomController = require('../controllers/roomController');

// Endpoints para gestão de salas
router.post('/', roomController.create); // Criar uma sala

router.get('/:id', roomController.getById); // Consultar detalhes de uma sala
router.get('/', roomController.getAll); // Consultar todas as salas

router.put('/:id', roomController.update); // Editar uma sala

router.delete('/:id', roomController.delete); // Remover uma sala

module.exports = router;
