const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const User = require('../models/user'); 


exports.userRegistration = async (req, res) => {
    try {
      const { username, email, password, role } = req.body;
  
      
      if (!username || !email || !password) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        role: role || 'user', // Papel padrão é "user"
      });
  
      res.status(201).json({ userId: newUser.id, message: 'Usuário registrado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ message: 'Usuário não encontrado' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(403).json({ message: 'Senha incorreta' });

    const token = jwt.sign(
      { userId: user.id, role: user.role }, // Incluímos o papel
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token, message: 'Login bem-sucedido' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
