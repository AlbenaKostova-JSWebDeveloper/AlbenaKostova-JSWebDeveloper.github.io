require('dotenv').config();
const bcrypt = require('bcrypt');

// const userService = require('../services/user');
const {
    generateToken,
    parseToken,
    // parseError
} = require('../utils/parsers');
const { signup, login } = require('../controllers/authController');

const secret = process.env.TOKEN_SECRET;

module.exports = (secret) => (req, res, next) => {
    const token = req.headers["x-authorization"];
    
    try {
        
    } catch (error) {
        
    }
    
    if (parseToken(req, res)) {
        req.auth = {
            async signup(username, email, password) {
                const token = await signup(username, email, password);
                res.cookie(process.env.COOKIE_NAME, token);
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


// async function login(username, password) {
//     const user = await userService.getUserByUsername(username);
    
//     if (!user) {
//         const err = new Error('No such user');
//         err.type = 'credential';
//         throw err;
//     }
    
//     const hasMatch = await bcrypt.compare(password, user.hashedPassword);
    
//     if (!hasMatch) {
//         const err = new Error('Incorrect password');
//         err.type = 'credential';
//         throw err;
//     }
    
//     return generateToken(user);
// }

