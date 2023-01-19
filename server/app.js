const express = require('express');
require("dotenv").config();
const router = require('./router/routes');
require("./db/sql");
const app = express();
// const path = require('path');
app.use(express.json());
app.use('/', router);
app.get("/", (req, res) => {
    res.send('Servidor funcionando')
})

app.listen(5000, () => {
    console.log('Todo bien')
})

