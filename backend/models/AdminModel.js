const { Schema, model } = require('mongoose');
const validator = require('validator');


const schema = new Schema({
    username: { type: String, required: true, unique: true }, 
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
});


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

module.exports = model('Admin', schema);