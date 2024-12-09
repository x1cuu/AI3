const User = require('../models/user'); 
const jwt = require('jsonwebtoken'); // Para geração de tokens.
const bcrypt = require('bcrypt'); // Para hashing de senhas.
const nodemailer = require('nodemailer'); // Para envio de emails.

exports.userRegistration = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: 'Este utilizador já existe' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ userId: newUser._id, message: 'Utilizador criado com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Credenciais inválidas' });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.status(403).json({ message: 'Utilizador ou password incorretas' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, userId: user._id, message: 'Login bem-sucedido' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.passwordRecovery = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const recoveryLink = `https://example.com/reset-password?token=${token}`;

    const transporter = nodemailer.createTransport({ /* Configurações de SMTP */ });
    await transporter.sendMail({
      from: '"Reserva de Salas" <no-reply@example.com>',
      to: email,
      subject: 'Recuperação de senha',
      text: `Clique no link para recuperar sua senha: ${recoveryLink}`
    });

    res.status(200).json({ message: 'Link de recuperação enviado para o email' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
