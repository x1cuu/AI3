const mongoose = require('mongoose');

// URL de conexão com o MongoDB
const mongoURI = 'mongodb://localhost:27017/sistema_reserva_salas';  // Substitua pelo seu nome de banco

// Conectando ao MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexão com o MongoDB bem-sucedida.'))
  .catch((err) => console.error('Não foi possível conectar ao MongoDB:', err));

// Exporta o Mongoose para que você possa usá-lo nos modelos
module.exports = mongoose;
