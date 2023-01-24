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
        name_u,
        surname,
        alias,
        email,
        password_u,
        confirm_password,
    } = req.body;
    if (
        password_u != confirm_password
    ) {
        console.log('Datos incorrectos')
    } else {
            const passwordHash = await encrypt(password_u);
            const passwordHash2 = await encrypt(confirm_password);
            let newUser = "INSERT INTO users (`name_u`, `surname`, `alias`, `email`, `password_u`, `confirm_password`) VALUES(?)"
            const values = [
                name_u,
                surname,
                alias,
                email,
                passwordHash,
                passwordHash2,
            ]
            connection.query(newUser, [values], function (err, req, res, next, callback)  {
                if (err) {
                    throw err
                }   else{

                
                    console.log('Registrado')
                     
                }
                
                
         
      
            })
         
    }
}
module.exports = {
    insertUser
};