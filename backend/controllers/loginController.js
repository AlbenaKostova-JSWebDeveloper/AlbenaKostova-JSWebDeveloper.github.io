const bcrypt = require('bcrypt');

const Admin = require('../models/AdminModel');
const { getUserByUsername } = require('../services/authService');
const { generateToken } = require('../utils/parsers');

async function login (req, res) {
    const { username, password } = req.body;
        
    try {
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
            const err = new Error('Invalid credentials');
            err.type = 'credential';
            throw err;
        }

        const token = {
            _id: admin._id,
            username: admin.username,
            accessToken: generateToken(admin._id)
        };
        
        console.log(`Known admin: ${token.username}`);        
        
        res.status(200).json(token);
        
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
};

module.exports = { login };