const express = require('express');
const { isGuest } = require('../middlewares/guards');

const { signup } = require('../controllers/signupController');
const { login } = require('../controllers/loginController');

const router = express.Router();

// signup
router.post('/signup', isGuest(), signup);

// login
router.post('/login', isGuest(), login);

module.exports = router;