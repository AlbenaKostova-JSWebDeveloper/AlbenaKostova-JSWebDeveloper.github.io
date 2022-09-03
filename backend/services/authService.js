const Admin = require('../models/AdminModel');

async function createAdmin(username, email, hashedPassword) {
    // check if exists
    const usernameExists = await Admin.findOne({ username });
    const emailExists = await Admin.findOne({ email });
    
    if (emailExists || usernameExists) {
        const err = new Error('Such user already exists');
        err.status = 409;
        throw err;
    }        

    // saving admin in the DB
    const admin = await Admin.create({ username, email, hashedPassword });
        
    return admin;
}

async function getUserByUsername(username) {
    const pattern = new RegExp(`^${username}$`, 'i');
    const admin = await Admin.findOne({ username: { $regex: pattern } });
    console.log(admin);
    
    return admin;
}

module.exports = {
    createAdmin,
    getUserByUsername,
}