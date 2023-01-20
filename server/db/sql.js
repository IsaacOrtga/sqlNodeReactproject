const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
connection.connect((err) => {
    if (!err) {
        console.log('Connection Established Successfully');
    } else {
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
    }
});
// connection.end();

// let createUser = `CREATE TABLE users (
//     user_id INT AUTO_INCREMENT,
//     name_u VARCHAR (100) NOT NULL,
//     surname VARCHAR (200) NOT NULL,
//     nick VARCHAR (30) NOT NULL,
//     email NVARCHAR (255) NOT NULL,
//     password_u VARCHAR (100) NOT NULL,
//        confirm_password VARCHAR (100) NOT NULL,
//     description_u VARCHAR(500),
//     PRIMARY KEY(user_id)
// )`;
// connection.query(createUser, (err, rows) => {
//     if (err) throw err;
//     console.log('Datos de tabla1: /n', rows);
// });
