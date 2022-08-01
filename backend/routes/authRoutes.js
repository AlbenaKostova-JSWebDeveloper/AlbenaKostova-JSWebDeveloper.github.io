const express = require('express');
const { isGuest } = require('../middlewares/guards');

const { 
    login, 
    signup 
} = require('../controllers/authController');

const router = express.Router();


// signup
router.post('/signup', isGuest(), signup);

// login
router.post('/login', isGuest(), login);


module.exports = router;