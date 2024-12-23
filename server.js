const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();  // Carrega as variáveis de ambiente do arquivo .env

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());

// Importa as rotas
const authRoutes = require('./Routes/authRoutes');

// Define as rotas
app.use('/auth', authRoutes);  // Prefixa as rotas com '/auth'
app.use(bodyParser.json());

// Conectando ao MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/sistema_reserva_salas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conexão com o MongoDB bem-sucedida.'))
.catch((err) => console.error('Não foi possível conectar ao MongoDB:', err));

// Inicia o servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.post('/users/register', (req, res) => {
    console.log('Recebendo requisição de registo');
    
  });
  