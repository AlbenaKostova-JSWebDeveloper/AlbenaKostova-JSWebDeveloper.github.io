const { ConnectionStates } = require('mongoose');
const Admin = require('../models/AdminModel');

// login
const login = async (req, res) => {
    
    const { username, password } = req.body;
    
    try {
        const user = await Admin.login(username, password);
        
        // token
        
        res.status(200).json({ username, user });
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
    console.log({mssg: 'Login'}); 
    console.log(req.body); 
    res.json({mssg: 'Login'});
};

// signup
const signup = async (req, res) => {
    const { username, email, password } = req.body;    
    
    try {
        const user = await Admin.signup(username, email, password);
        
        // token
        
        res.status(201).json({ username, user });
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
};


module.exports = {
    login,
    signup
};