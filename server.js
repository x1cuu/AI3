require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const roomRoutes = require('./routes/roomRoutes');

const app = express();
connectDB();

app.use(express.json());
app.use('/users', authRoutes);
app.use('/reservation', reservationRoutes);
app.use('/rooms', roomRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
