const User = require('../models/UserModel');

// login
const login = async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const user = await User.login(username, password);
        
        // token
        
        res.status(200).json({ username, user });
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
};

// signup
const signup = async (req, res) => {
    const { username, email, password } = req.body;    
    
    try {
        const user = await User.signup(username, email, password);
        
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