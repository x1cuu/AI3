const express = require('express');
const { authenticate, authorize } = require('../middlewares/authenticate');
const router = express.Router();

// Apenas administradores podem acessar este endpoint
router.get('/admin-only', authenticate, authorize(['admin']), (req, res) => {
  res.status(200).json({ message: 'Bem-vindo à área de administradores!' });
});

// Apenas usuários com papéis "admin" ou "moderator" podem acessar este endpoint
router.get('/moderator-or-admin', authenticate, authorize(['admin', 'moderator']), (req, res) => {
  res.status(200).json({ message: 'Acesso permitido para admins e moderadores!' });
});

// Qualquer usuário autenticado pode acessar este endpoint
router.get('/user-area', authenticate, (req, res) => {
  res.status(200).json({ message: 'Bem-vindo à área de usuários!' });
});

module.exports = router;
