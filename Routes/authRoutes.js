const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

// Rotas de autenticação
router.post('/register', authController.userResgistration); // Registo
router.post('/login', authController.userLogin); // Login
router.post('/passwordRecovery', authController.passwordRecovery); // Recuperação de palavra-passe

module.exports = router;