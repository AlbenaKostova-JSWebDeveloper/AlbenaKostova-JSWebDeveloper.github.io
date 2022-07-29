const User = require('../models/UserModel');

// login
const login = async (req, res) => {
    res.json({ message: 'login'});
};

// signup
const signup = async (req, res) => {
    res.json({ message: 'signup'});
};


module.exports = {
    login,
    signup
};