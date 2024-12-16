const mongoose = require('mongoose');
require('dotenv').config(); // Carrega as variáveis do .env

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/sistema_reserva_salas'; // Usa a variável do .env, ou o valor padrão caso não esteja definida

// Conectando ao MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 50000  // 50 segundos
})
  .then(() => console.log('Conexão com o MongoDB bem-sucedida.'))
  .catch((err) => console.error('Não foi possível conectar ao MongoDB:', err));

// Exporta o Mongoose para que você possa usá-lo nos modelos
module.exports = mongoose;
