require('dotenv').config();
const bcrypt = require('bcrypt');

// const userService = require('../services/user');
const {
    generateToken,
    parseToken,
    // parseError
} = require('../utils/parsers');
const { signup } = require('../controllers/signupController');
const { login } = require('../controllers/loginController');

const secret = process.env.TOKEN_SECRET;

module.exports = (secret) => (req, res, next) => {  
    if (parseToken(req, res)) {
        req.auth = {
            async signup(username, email, password) {
                const token = await signup(username, email, password);
                res.cookie(process.env.COOKIE_NAME, token); // X-Authorization ???
            },
            async login(username, password) {
                const token = await login(username, password);
                res.cookie(process.env.COOKIE_NAME, token);
            } ,
            logout() {
                res.clearCookie(process.env.COOKIE_NAME);
            }
        };
        
        next();
    }
};