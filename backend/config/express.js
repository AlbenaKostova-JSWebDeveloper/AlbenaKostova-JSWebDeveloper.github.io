const express = require('express');

module.exports = (app) => {
    /* global middlewares */
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({extended: true}));
    
    app.use(express.json());
    
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