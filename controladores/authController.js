const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');  // Certifique-se de que este caminho está correto
require('dotenv').config();

// Registro de usuários
exports.userRegistration = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;  // `role` pode ser opcional
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criação do usuário
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || 'user'  // Define o papel padrão como 'user'
    });

    // Salvar o novo usuário no banco
    await newUser.save();

    res.status(201).json({ userId: newUser._id, message: 'Utilizador registado com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login de usuários
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });  // Usando Mongoose para encontrar o usuário
    if (!user) return res.status(401).json({ message: 'Utilizador não encontrado' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(403).json({ message: 'Senha incorreta' });

    // Gerar o token JWT com o ID e o role do usuário
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token, message: 'Login bem-sucedido' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Recuperação de senha (exemplo básico)
exports.passwordRecovery = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: 'Email não encontrado' });

    // Aqui, normalmente você geraria um token de recuperação ou enviaria um email com instruções.
    // Para fins de exemplo, vamos apenas enviar um sucesso.
    res.status(200).json({ message: 'Instruções de recuperação de senha enviadas para o seu email.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
