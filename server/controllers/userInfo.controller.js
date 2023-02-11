// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE
// });
// async function getInfoUser(req, res, next){
//     const infoFromCookies = req.cookies;
//     let searchFromCookies = `SELECT * FROM users WHERE user_id = ?`
//     await connection.query(searchFromCookies, [infoFromCookies], (error, results, fields) => {
      
//         if(error) {
//             return console.error(error.message);
//         }
       
//         const name_u  = results[0].name_u;
//         const surname  = results[0].surname;
//         res.json({status: true, message: 'Datos de usuario recibidos', name_u, surname}) 
        
        
//     }) 
// } 
// module.exports = {getInfoUser}; 