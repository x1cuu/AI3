const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// Controladores
const authController = require('./controladores/authController');
const roomController = require('./controladores/roomController');
const reservationController = require('./controladores/reservationController');


const userRoutes = require('./Routes/userRoutes'); // Rotas para registro/login
const protectedRoutes = require('./Routes/protectedRoutes'); // Rotas protegidas

const app = express();

// Middleware
app.use(bodyParser.json());

// Rotas públicas (registro e login)
app.use('/api/users', userRoutes); // Ex.: /api/users/register, /api/users/login

// Rotas protegidas (exige autenticação)
app.use('/api/protected', protectedRoutes); // Ex.: /api/protected/admin-only

// Rota de registo de utilizador 
app.post('/users/register', authController.userRegistration);

// Rota de login de utilizador
app.post('/users/login', authController.userLogin);

// Rota de recuperação de senha 
app.post('/users/passwordRecovery', authController.passwordRecovery);

// Rotas de salas
app.post('/rooms/create', roomController.createRoom);
app.put('/rooms/:roomId', roomController.editRoom);
app.delete('/rooms/:roomId', roomController.deleteRoom);

// Rotas de reservas
app.post('/reservation/create', reservationController.createReservation);
app.get('/reservation/view', reservationController.viewReservation);
app.put('/reservation/:id', reservationController.editReservation);
app.delete('/reservation/:id', reservationController.deleteReservation);

// Porta do servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

