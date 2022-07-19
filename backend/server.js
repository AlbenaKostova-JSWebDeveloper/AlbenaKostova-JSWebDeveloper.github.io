require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({mssg: "Welcome to the app"})
});

app. listen(process.env.PORT, () => {
    console.log(`Connected to DB & listenning at http://localhost:${process.env.PORT}`);
});