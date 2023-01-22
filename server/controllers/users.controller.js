const mysql = require('mysql');
const { encrypt } = require('../helpers/handleBcrypt');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
async function insertUser(req, res) {
    const {
        name,
        surname,
        alias,
        email,
        password,
        confirmPassword,
        // descriptionReg
    } = req.body;
    if (
        password != confirmPassword
    ) {
        console.log('Datos incorrectos')
    } else {
        // const passwordHash = await encrypt(passReg);
        // const passwordHash2 = await encrypt(confirmPass);
            let insertUser = "INSERT INTO users (`name_u`, `surname`, `nick`, `email`, `password_u`, `confirm_password`) VALUES(?)"
            const values = [
                name,
                surname,
                alias,
                email,
                password,
                confirmPassword,
            ]
            connection.query(insertUser, [values], function (err, req, res)  {
                if (err) {
                    throw err
                }   
                console.log('New user registered')
            })
    }
}
module.exports = {
    insertUser
};