require('dotenv').config();
const mongoose = require('mongoose');

/* establish DB connection */
module.exports = (app) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        const db = mongoose.connection;
        db.on('error', (err) => {
            console.error('connection error:', err.message);
            reject(err);
        });
        db.once('open', function () {
            console.log('Connected to DB');
            resolve();
        });
    });
};