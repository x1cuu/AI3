const express = require('express');
const authController = require('../controladores/authController');  
const router = express.Router();

// Rotas de autenticação
router.post('/register', authController.userRegistration); // Registo
router.post('/login', authController.userLogin); // Login
router.post('/passwordRecovery', authController.passwordRecovery); // Recuperação de palavra-passe

module.exports = router;
