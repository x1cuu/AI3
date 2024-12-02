// Importando o mongoose
const mongoose = require('mongoose');

// Configuração da URL de conexão com o MongoDB
const mongoURI = 'mongodb://localhost:27017/sistema_reserva';  // Você pode alterar o URI se usar um MongoDB na nuvem (Atlas, por exemplo)

// Função para conectar ao banco de dados
const connectDB = async () => {
  try {
    // Conectando ao MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB', error);
    process.exit(1); // Sai se não conseguir conectar
  }
};

// Exportando a função de conexão
module.exports = connectDB;
