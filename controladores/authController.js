const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

// Registro de usuários
exports.userRegistration = async (req, res) => {
  try {
    const { username, email, password, role } = req.body; // `role` pode ser opcional
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ 
      username, 
      email, 
      password: hashedPassword, 
      role: role || 'user' // Define o papel padrão como 'user'
    });

    res.status(201).json({ userId: newUser.id, message: 'Usuário registrado com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login de usuários
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ message: 'Usuário não encontrado' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(403).json({ message: 'Senha incorreta' });

    // Inclui o papel no payload do token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token, message: 'Login bem-sucedido' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
