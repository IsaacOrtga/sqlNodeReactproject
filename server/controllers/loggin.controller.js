const mysql = require('mysql');
const { compare } = require('../helpers/handleBcrypt.js');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
async function getUser(req, res){
    const {
        email,
        password,
    } = req.body;
    let searchUserInfo = `SELECT * FROM users WHERE email = ?`
    connection.query(searchUserInfo, [email], async (error, results, fields) => {
      
        if(error) {
            return console.error(error.message);
        }
        console.log(results)
    })
    
}
module.exports = {getUser};