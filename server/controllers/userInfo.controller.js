// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE
// });
// async function getInfoUser(req, res, next){
//     const {
//         user_id
//     } = req.body;
//     let searchUserInfo = `SELECT * FROM users WHERE email = ?`
//     await connection.query(searchUserInfo, [email], (error, results, fields) => {
      
//         if(error) {
//             return console.error(error.message);
//         }
//         const hash = results[0].password_u;
//         const user_id = results[0].user_id;

//         bcrypt.compare(password_u, hash, function(err, ok){
//             if(!err && ok){
//                 console.log(results)
          
//             }
//         })
//         next();
//         res.cookie('user_id', `${user_id}`)
//         res.json({status: true, message: 'Usuario correcto', user_id}) 
        
        
//     }) 
// } 
// module.exports = {getUser}; 