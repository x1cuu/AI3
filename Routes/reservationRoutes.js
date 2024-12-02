const express = require('express');
const { createReservation, viewReservations } = require('../controllers/reservationController');
const { authenticate } = require('../middleware/authenticate');
const router = express.Router();

router.post('/create', authenticate, createReservation);
router.get('/view', authenticate, viewReservations);

module.exports = router;
