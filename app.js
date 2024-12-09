const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./Routes/authRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Rotas
app.use('/users', authRoutes);
app.use('/reservation', reservationRoutes);

// Conexão ao MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ativo em http://localhost:${PORT}`);
});
