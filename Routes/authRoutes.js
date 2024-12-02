const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

// Rotas de autenticação
router.post('/register', authController.registerUser); // Registo
router.post('/login', authController.loginUser); // Login
router.post('/passwordRecovery', authController.passwordRecovery); // Recuperação de palavra-passe

module.exports = router;