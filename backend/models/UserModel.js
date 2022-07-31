const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');


const schema = new Schema({
    username: { type: String, required: true, unique: true }, 
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
});

// static signup method
schema.statics.signup = async function (username, email, password) {
    // validations
    if (!username || !email || !password) {
        throw new Error('All fields are required');
    }
    
    if (!validator.isEmail(email)) {
        throw new Error('Please enter a valid email');
    }
    
    if (!validator.isStrongPassword(password)) {
        throw new Error('The password is not strong enough');
    }
    
    const emailExists = await this.findOne({ email });
    const usernameExists = await this.findOne({ username });
    
    if (emailExists || usernameExists) {
        throw new Error('Such user already exists');
    }
    
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    
    const user = await this.create({ username, email, password: hash });
    
    return user;
}

// static login method
schema.statics.login = async function (username, password) {
    // validations
    if (!username || !password) {
        throw new Error('All fields are required');
    }
    
    const user = await this.findOne({ username });
    
    if (!user) {
        throw new Error('Invalid credentials');
    }
    
    const match = await bcrypt.compare(password, user.password);
    
    if (!match) {
        throw new Error('Invalid credentials');        
    }
    
    return user;
}

module.exports = model('User', schema);