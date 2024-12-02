const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Rotas de autenticação
router.post('/register', authController.userResgistration); // Registo
router.post('/login', authController.userLogin); // Login
router.post('/passwordRecovery', authController.passwordRecovery); // Recuperação de palavra-passe

module.exports = router;
