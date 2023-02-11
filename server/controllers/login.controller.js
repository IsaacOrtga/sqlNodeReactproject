const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
async function getUser(req, res, next){
    const {
        email,
        password_u,
    } = req.body;
    let searchUserInfo = `SELECT * FROM users WHERE email = ?`
    await connection.query(searchUserInfo, [email], (error, results) => {  
        if(error) {
            return next(error);
        }
        if (results.length === 0) {
            return res.status(401).json({
                status: false,
                message: 'Email o contraseña incorrectos'
            });
        }
        const hash = results[0].password_u;
        const user_id = results[0].user_id;
        const name_u = results[0].name_u;
        const surname = results[0].surname;
        const alias = results[0].alias;
        
        bcrypt.compare(password_u, hash, function(err, isMatch) {
            if (err) {
                return next(err);
            }
            if (!isMatch) {
                return res.status(401).json({
                    status: false,
                    message: 'Email o contraseña incorrectos'
                });
            }
            res.cookie('user_id', user_id);
            res.cookie('name_u', name_u);
            res.cookie('surname', surname);
            res.cookie('alias', alias);
            res.redirect('/');
        });
    });
}
module.exports = {getUser}; 