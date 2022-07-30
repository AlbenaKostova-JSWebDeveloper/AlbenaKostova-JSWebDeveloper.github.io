const User = require('../models/User');

async function createUser(username, email, hashedPassword) {
    
    const user = new User({
        username, 
        email,
        hashedPassword,
    });
    
    await user.save();
    
    return user;
}

async function getUserByUsername(username) {
    const pattern = new RegExp(`^${username}$`, 'i');
    const user = await User.findOne({ username: { $regex: pattern } });
    console.log(user);
    
    return user;
}

async function getUserById(id) {
    const pattern = new RegExp(`^${id}$`, 'i');
    const user = await User.findOne({ _id: { $regex: pattern } });
    console.log(user);
    
    return user;
}


module.exports = {
    createUser,
    getUserByUsername,
    getUserById
}