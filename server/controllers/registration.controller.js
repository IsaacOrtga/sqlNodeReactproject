const mysql = require('mysql');
const { encrypt } = require('../helpers/handleBcrypt');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

async function insertUser(req, res, next) {
    const {
        name_u,
        surname,
        alias,
        email,
        password_u,
        confirm_password,
    } = req.body;
    if (password_u !== confirm_password) {
        console.log('Datos incorrectos');
        return res.status(400).json({ status: false, message: 'Password and confirm password do not match' });
    } else {
        const passwordHash = await encrypt(password_u);
        const passwordHash2 = await encrypt(confirm_password);
        let callDataUser = "INSERT INTO users (name_u, surname, alias, email, password_u, confirm_password) VALUES(?)"
        const values = [
            name_u,
            surname,
            alias,
            email,
            passwordHash,
            passwordHash2,
        ]
        await connection.query(callDataUser, [values], function (err, result) {
            if (err) {
                console.error(err);
                return res.status(500).json({ status: false, message: 'Error al insertar el usuario en la base de datos' });
            } else {
                console.log('New user inserted')
            }

            res.cookie('name_u', `${name_u}`)
            res.cookie('surname', `${surname}`)
            res.cookie('alias', `${alias}`)
            res.json({status: true})
            connection.end();
        });


        const cookies = req.cookies;
        // res.redirect('/');
    }
}
module.exports = {
    insertUser
};