const mysql = require('mysql');
const bcrypt = require('bcrypt');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
function insertUser(req, res, callback) {
    const nameExpression = new RegExp(/[a-zA-Z\u00C0-\u017F]/);
    const surExpression = new RegExp(/[a-zA-Z\u00C0-\u017F]/);
    const nickExpression = new RegExp(/[a-zA-Z\u00C0-\u017F]/);
    const emailExpression = new RegExp(/[^@]+@[^@]+\.[a-zA-Z]{2,}/);
    const passExpression = new RegExp(/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}/);
    const descriptionExpression = new RegExp(/^([A-Za-z]{1,500})/);
    const {
        nameReg,
        surNameReg,
        nickReg,
        emailReg,
        passReg,
        confirmPass,
        descriptionReg
    } = req.body;
    if (
        !nameExpression.test(nameReg) ||
        !surExpression.test(surNameReg) ||
        !nickExpression.test(nickReg) ||
        !emailExpression.test(emailReg) ||
        !passExpression.test(passReg) ||
        !descriptionExpression.test(descriptionReg) ||
        passReg != confirmPass
    ) {
        console.log('Datos incorrectos')
    } else {
       
        bcrypt.hash(passReg, 10, (err, passSecretaEncriptada) => {
            if (err) {
            } else {
                passEncriptada = passSecretaEncriptada;
            }
            let userJson = {
                passReg: passEncriptada,
                confirmPass: passEncriptada
            }
            
            const dataNewUser = ['"'+nameReg+'"','"'+ surNameReg+'"','"'+ nickReg+'"','"'+ emailReg+'"','"'+ userJson.passReg+'"','"'+ userJson.confirmPass+'"','"'+ descriptionReg+'"'];
            let insertUser = `INSERT INTO users (name_u, surname, nick, email, password_u, confirm_password, description_u) VALUES(${dataNewUser})`
            connection.query(insertUser, function (err, req, res)  {
                if (err) {
                    throw err
                }
            
                console.log('New user registered')
            })
        });
    }
} 
module.exports = {
    insertUser
};