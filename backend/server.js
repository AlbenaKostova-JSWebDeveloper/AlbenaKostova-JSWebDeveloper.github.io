require('dotenv').config();
const express = require('express');


const expressConfig = require('./config/express');


const projectRoutes = require('./routes/projectRoutes');


start();

async function start() {
    /* express app */
    const app = express();
    
    expressConfig(app);
    
    /* routes */
    app.use('/api/projects', projectRoutes);
    
    /* listen for requests */
    app.listen(process.env.PORT, () => {
        console.log(`Seerver listenning at http://localhost:${process.env.PORT}`);
    });  
}