require('dotenv').config();
const jwt = require('jsonwebtoken');

function generateToken(_id) {
    return jwt.sign(
        {_id}, 
        process.env.TOKEN_SECRET, 
        { expiresIn: '3d' }
    );
}

function parseToken(req, res) {
    // const token = req.cookies[process.env.COOKIE_NAME];
    const token = req.headers["x-authorization"];

    
    if (token) {
        try{
            const userData = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = userData;
            res.locals.user = userData;
        } catch(err) {
            res.clearCookie(process.env.COOKIE_NAME);
            res.redirect('/auth/login');        
            return false;
        }        
    }
    
    return true;
}

function parseError(err) {
    if (err.name == 'ValidationError') {
        return Object.values(err.errors).map(e => e.properties.message);
    } else {
        return [err.message];
    }
}

module.exports = { 
    generateToken,
    parseToken,
    parseError
};