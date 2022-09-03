const validator = require('validator');
const bcrypt = require('bcrypt');

const { createAdmin } = require('../services/authService');
const { generateToken } = require('../utils/parsers');

async function signup (req, res) {
    const { username, email, password } = req.body;        
    
    try {
        if (!username || !email || !password) {
            throw new Error('All fields are required');
        }
        
        if (!validator.isEmail(email.trim())) {
            throw new Error('Please enter a valid email');
        }
        
        if (!validator.isStrongPassword(password.trim())) {
            throw new Error('The password is not strong enough');
        }
            
        const salt = await bcrypt.genSalt(11);
        const hashedPassword = await bcrypt.hash(password.trim(), salt);
        
        const admin = await createAdmin(username.trim(), email.trim(), hashedPassword);
        
        const token = {
            _id: admin._id,
            username: admin.username,
            // roles: admin.roles,
            // permissions: admin.permissions
            accessToken: generateToken(admin._id)
        };
        
        console.log(`Known admin: ${token.username}`);
        
        res.status(201).json(token);
        
    } catch (err) {
        res.status(err.status || 400).json({ error: err.message});
    }
};

module.exports = { signup };