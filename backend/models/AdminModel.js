const { Schema, model } = require('mongoose');

const schema = new Schema({
    username: { type: String, required: true, unique: true }, 
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
});

module.exports = model('Admin', schema);