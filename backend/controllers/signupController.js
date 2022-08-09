const { ConnectionStates } = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const Admin = require('../models/AdminModel');
const { createAdmin } = require('../services/authService');
const { generateToken } = require('../utils/parsers');

async function signup (req, res) {
    
    const { username, email, password } = req.body;        
    
    try {
        
        // validations
        if (!username || !email || !password) {
            throw new Error('All fields are required');
        }
        
        if (!validator.isEmail(email.trim())) {
            throw new Error('Please enter a valid email');
        }
        
        if (!validator.isStrongPassword(password.trim())) {
            throw new Error('The password is not strong enough');
        }
        
        // hashing password
        const hashedPassword = await bcrypt.hash(password, 10);   
        
        // creating record
        const admin = await createAdmin(username.trim(), email.trim(), password.trim());
        
        const token = {
            _id: admin._id,
            username: admin.username,
            accessToken: generateToken(admin)
        };
        
        res.status(201).json(token);
        
    } catch (err) {
        res.status(err.status || 400).json({ error: err.message});
    }
};


module.exports = { signup };