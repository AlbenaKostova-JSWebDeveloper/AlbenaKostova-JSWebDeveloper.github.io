require('dotenv').config();
const express = require('express');

const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');

start();

async function start() {
    /* express app */
    const app = express();
    
    await databaseConfig(app);        
    expressConfig(app);
    routesConfig(app);       
    
    /* listen for requests */
    app.listen(process.env.PORT, () => {
        console.log(`REST API is listenning at ${process.env.HOST}:${process.env.PORT}`);
    });  
}