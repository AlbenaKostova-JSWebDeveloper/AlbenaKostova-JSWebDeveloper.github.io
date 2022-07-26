require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');


/* express app */
const app = express();

app.use(express.json());

/* global middleware */
app.use((req, res, next) => {
    console.log(req.path, req.method)
    
    next();
});

/* routes */
app.use('/', (req, res) => {
    res.send('hello');
});

app. listen(process.env.PORT, () => {
    console.log(`Seerver listenning at http://localhost:${process.env.PORT}`);
}); 


/* establish DB connection & listen for requests */
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         console.log('connected to database');
//         app. listen(process.env.PORT, () => {
//             console.log(`Connected to DB & listenning on port`, process.env.PORT);
//         });        
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });