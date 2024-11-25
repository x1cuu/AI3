const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const roomRoutes = require('./routes/roomRoutes');

const app = express();
app.use(bodyParser.json());

// Rotas
app.use('/api/users', authRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/rooms', roomRoutes);

// Erro Genérico
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message ||  'Erro interno no servidor' });
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Servidor ativo em http://localhost:${PORT});
});