const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const schema = new Schema({
    username: { type: String, required: true, unique: true }, 
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
});

// static signup method
schema.statics.signup = async function (username, email, password) {
    
    
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

module.exports = model('User', schema);