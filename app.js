const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const authController = require('./controladores/authController');
const roomController = require('./controladores/roomController');
const reservationController = require('./controladores/reservationController');

const app = express();
app.use(bodyParser.json());

// Rotas de autenticação
app.post('/users/register', authController.userRegistration);
app.post('/users/login', authController.userLogin);

// Rotas de salas
app.post('/rooms/create', roomController.createRoom);
app.put('/rooms/:roomId', roomController.editRoom);
app.delete('/rooms/:roomId', roomController.deleteRoom);

// Rotas de reservas
app.post('/reservation/create', reservationController.createReservation);

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
