const express = require('express');
const { userRegistration, userLogin } = require('../controladores/userController');

const router = express.Router();

// Rota para registro de usuário
router.post('/register', userRegistration);

// Rota para login de usuário
router.post('/login', userLogin);

module.exports = router;
