require('dotenv').config();
const express = require('express');
const cors = require('../middlewares/cors');
const auth = require('../middlewares/auth');

module.exports = (app) => {
    /* global middlewares */
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({extended: true}));
    
    
    app.use(cors());
    app.use(express.json());
    app.use(auth(process.env.TOKEN_SECRET));
    
    app.use((req, res, next) => {
        if (!req.url.includes('favicon')) {
            console.log('>>> ', req.path, req.method, req.url);
            
            if (req.user) {
                console.log('Known user', req.user.username);
            }            
        }   
        
        next();
    });
};