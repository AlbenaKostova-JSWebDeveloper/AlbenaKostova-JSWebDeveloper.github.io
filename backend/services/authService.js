const Admin = require('../models/AdminModel');


async function createAdmin(username, email, hashedPassword) {
    // check if exists
    const emailExists = await Admin.findOne({ email });
    const usernameExists = await Admin.findOne({ username });
    
    if (emailExists || usernameExists) {
        const err = new Error('Such user already exists');
        err.status = 409;
        throw err;
    }
    
    
    // compile data
    const admin = new Admin({
        username, 
        email,
        hashedPassword,
    });
    
    // save data to DB
    await admin.save();
    
    return admin;
}

async function getUserByUsername(username) {
    const pattern = new RegExp(`^${username}$`, 'i');
    const user = await Admin.findOne({ username: { $regex: pattern } });
    console.log(user);
    
    return user;
}

async function getUserById(id) {
    const pattern = new RegExp(`^${id}$`, 'i');
    const user = await Admin.findOne({ _id: { $regex: pattern } });
    console.log(user);
    
    return user;
}


module.exports = {
    createAdmin,
    getUserByUsername,
    getUserById
}