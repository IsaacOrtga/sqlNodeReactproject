var cookieParser = require('cookie-parser');
const express = require('express');
require("dotenv").config();
const router = require('./router/routes');
require("./db/sql");
const app = express();
const path = require('path');
app.use(cookieParser());
app.use(express.json());
app.use('/', router); 
app.get("/", (req, res) => {
    res.send('Servidor funcionando')
})

app.listen(5000, () => {
    console.log('Server listening on port 5000')
})

