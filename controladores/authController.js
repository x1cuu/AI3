const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');  
require('dotenv').config();

// Registo de utilizador
exports.userRegistration = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Verificar se o utilizador já existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: 'Este utilizador já existe' });
    }

    // Hash da senha antes de salvar no banco
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar novo utilizador
    const newUser = new User({
      username,
      email,
      password: hashedPassword, // Armazenar a senha hash
      role,
    });

 
    await newUser.save();

    res.status(201).json({
      userId: newUser._id,
      message: 'Utilizador criado com sucesso',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

// Login de utilizador
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Comparar a senha fornecida com a senha armazenada
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gerar o token JWT
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // O token vai expirar em 1 hora
    );

    res.status(200).json({
      token,
      userId: user._id,
      message: 'Login bem-sucedido',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

// Recuperação de senha 
exports.passwordRecovery = async (req, res) => {
  try {
    const { email } = req.body;

    // Verificar se o utilizadoro existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Utilizador não encontrado' });
    }

    // Aqui você pode gerar um token de recuperação ou enviar um e-mail com o link para recuperação
    // Exemplo de link fictício de recuperação
    const recoveryToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Aqui você pode enviar o e-mail (omiti o envio de e-mail por simplicidade)
    // Exemplo de link fictício
    const recoveryLink = `http://localhost:3001/users/password-recovery/${recoveryToken}`;

    res.status(200).json({
      message: 'Link de recuperação enviado para o email',
      recoveryLink,  // O link seria enviado ao utilizador no e-mail, mas aqui estamos apenas simulando
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};
