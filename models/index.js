const mongoose = require('mongoose');
require('dotenv').config(); 

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/sistema_reserva_salas'; // Usa a variável do .env, ou o valor padrão caso não esteja definida


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000  // 5 segundos
})
  .then(() => console.log('Conexão com o MongoDB bem-sucedida.'))
  .catch((err) => console.error('Não foi possível conectar ao MongoDB:', err));

module.exports = mongoose;
