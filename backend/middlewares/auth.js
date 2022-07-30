require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userService = require('../services/user');

module.exports = () => (req, res, next) => {
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

async function signup(username, email, password) {
    
    const existing = await userService.getUserByUsername(username);
    
    if (existing) {
        throw new Error('Username is taken!');
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.createUser(username, email, hashedPassword);
    
    return generateToken(user);
}

async function login(username, password) {
    const user = await userService.getUserByUsername(username);
    
    if (!user) {
        const err = new Error('No such user');
        err.type = 'credential';
        throw err;
    }
    
    const hasMatch = await bcrypt.compare(password, user.hashedPassword);
    
    if (!hasMatch) {
        const err = new Error('Incorrect password');
        err.type = 'credential';
        throw err;
    }
    
    return generateToken(user);
}

function generateToken(userData) {
    return jwt.sign({
        _id: userData._id,
        username: userData.username
    }, process.env.TOKEN_SECRET);
}

function parseToken(req, res) {
    const token = req.cookies[process.env.COOKIE_NAME];
    
    if (token) {
        try{
            const userData = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = userData;
            res.locals.user = userData;
        } catch(err) {
            res.clearCookie(process.env.COOKIE_NAME);
            res.redirect('/user/login');        
            return false;
        }        
    }
    
    return true;
}