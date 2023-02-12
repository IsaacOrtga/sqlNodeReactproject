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


//    let createUser = `CREATE TABLE users (
//        user_id INT AUTO_INCREMENT,
//        name_u VARCHAR (100) NOT NULL,
//        surname VARCHAR (200) NOT NULL,
//        alias VARCHAR (30) NOT NULL,
//        email NVARCHAR (255) NOT NULL,
//        password_u VARCHAR (100) NOT NULL,
//        confirm_password VARCHAR (100) NOT NULL,
//        description_u VARCHAR (400),
//        interests VARCHAR(10),
//        profile_image TEXT, 
//        fk_id_places INT,    
//        PRIMARY KEY(user_id)
//    )`;
//    connection.query(createUser, (err, rows) => {
//        if (err) throw err;
//        console.log('Datos de users: /n', rows);
//    });
//    let createFavorites = `CREATE TABLE favorite_places (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     user_id INT NOT NULL,
//     name VARCHAR(100) NOT NULL,
//     comment VARCHAR (500),
//     created_at DATETIME NOT NULL,
//     FOREIGN KEY (user_id) REFERENCES users(user_id)
//   )`;
//   connection.query(createFavorites, (err, rows) => {
//     if (err) throw err;
//     console.log('Datos de favorites: /n', rows);
// });
//     let createComments = `CREATE TABLE comments_user (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         user_id INT NOT NULL,
//         place_id INT NOT NULL,
//         title VARCHAR (100),
//         comment VARCHAR (500),
//         created_at DATETIME NOT NULL,
//         FOREIGN KEY (user_id) REFERENCES users(user_id),
//         FOREIGN KEY (place_id) REFERENCES places(place_id)

//     )`;
//     connection.query(createComments, (err, rows) => {
//         if (err) throw err;
//         console.log('Tabla de comments: /n', rows);
//     })

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
//  connection.end();