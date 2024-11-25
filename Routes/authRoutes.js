const express = require('express');
const router = express.Router();

// Importação do controlador
const authController = require('../controllers/authController');

// Endpoints de autenticação
router.post('/register', authController.register); // Registo de utilizador
router.post('/login', authController.login); // Login
router.post('/recover-password', authController.recoverPassword); // Recuperação de palavra-passe

module.exports = router;
