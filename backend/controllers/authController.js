const { ConnectionStates } = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const Admin = require('../models/AdminModel');
const { createAdmin, getUserByUsername } = require('../services/authService');
const { generateToken } = require('../utils/parsers');

// signup
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

// login
async function login (req, res) {
    
    const { username, password } = req.body;
    
    try {
        // validations
        if (!username || !password) {
            throw new Error('All fields are required');
        }
        
        const user = await getUserByUsername(username);
        
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

        generateToken(user);
        
        res.status(200).json({ username, user });
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
    console.log({mssg: 'Login'}); 
    console.log(req.body); 
    res.json({mssg: 'Login'});
};



module.exports = {
    login,
    signup
};