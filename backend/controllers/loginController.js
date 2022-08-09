const { ConnectionStates } = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const Admin = require('../models/AdminModel');
const { getUserByUsername } = require('../services/authService');
const { generateToken } = require('../utils/parsers');

async function login (req, res) {
    
    const { username, password } = req.body;
    
    try {
        
        // validations
        if (!username || !password) {
            throw new Error('All fields are required');
        }
        
        const admin = await getUserByUsername(username.trim());
        
        if (!admin) {
            const err = new Error('No such user');
            err.type = 'credential';
            throw err;
        }
        
        const hasMatch = await bcrypt.compare(password, admin.hashedPassword);
        
        if (!hasMatch) {
            const err = new Error('Incorrect password');
            err.type = 'credential';
            throw err;
        }

        // generate token
        const token = {
            _id: admin._id,
            username: admin.username,
            accessToken: generateToken(admin)
        };
        
        // send response
        res.status(200).json(token);
        
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
};

module.exports = { login };