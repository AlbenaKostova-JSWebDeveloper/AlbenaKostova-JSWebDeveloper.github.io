require('dotenv').config();
const express = require('express');

const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');

start();

async function start() {
    /* express app */
    const app = express();
    
    try {
        await databaseConfig(app);        
    } catch(err) {
       conosle.log(`DB ERROR: ${err}`); 
    }
    expressConfig(app);
    routesConfig(app);       
    
    /* listen for requests */
    app.listen(process.env.PORT, () => {
        console.log(`REST API is listenning at http://localhost:${process.env.PORT}`);
    });  
}