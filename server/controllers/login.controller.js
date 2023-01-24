const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const compare  = require('../helpers/handleBcrypt.js');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
function getUser(req, res, next){
    const {
        email,
        password_u,
    } = req.body;
    let searchUserInfo = `SELECT * FROM users WHERE email = ?`
    connection.query(searchUserInfo, [email], (error, results, fields) => {
      
        if(error) {
            return console.error(error.message);
        }
        const hash = results[0].password_u;
        bcrypt.compare(password_u, hash, function(err, ok){
            if(!err && ok){
                console.log(results)
            }
        })
        next();
        res.json({status: true, message: 'Usuario correcto'})
       
    })
    
}
module.exports = {getUser};