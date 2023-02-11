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

//   let createUser = `CREATE TABLE users (
//       user_id INT AUTO_INCREMENT,
//       name_u VARCHAR (100) NOT NULL,
//       surname VARCHAR (200) NOT NULL,
//       alias VARCHAR (30) NOT NULL,
//       email NVARCHAR (255) NOT NULL,
//       password_u VARCHAR (100) NOT NULL,
//       confirm_password VARCHAR (100) NOT NULL,
//       description_u VARCHAR (400),
//       interests VARCHAR(10),
//       profile_image TEXT, 
//       fk_id_places INT,    
//       PRIMARY KEY(user_id)
//   )`;
//   connection.query(createUser, (err, rows) => {
//       if (err) throw err;
//       console.log('Datos de users: /n', rows);
//   });

//  let createPlaces = `CREATE TABLE places (
//     place_id INT AUTO_INCREMENT,
//     name_p VARCHAR (200) NOT NULL,
//     description VARCHAR (400),
//     direction VARCHAR (300) NOT NULL,
//     type_places VARCHAR (100) NOT NULL,
//     charcateristics_p VARCHAR (10) NOT NULL,
//     PRIMARY KEY (place_id)
//  )`;
//  connection.query(createPlaces, (err, rows) => {
//     if (err) throw err;
//     console.log('Datos de places: /n', rows);
// });