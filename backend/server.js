import path from 'path';
import express from 'express';
import dotenv from 'dotenv'; 

dotenv.config();



const app = express();

app.get('/', (req, res) => {
    res.send("Portfolio - BE");
});

app. listen(process.env.PORT, () => {
    console.log(`Connected to DB & listenning at http://localhost:${process.env.PORT}`);
});