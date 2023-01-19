const mysql = require('mysql');
const bcrypt = require('bcrypt');


function insertUser(req, connection, callback) {
    const nameExp = new RegExp(/^[a-zA-Z\u00C0-\u017F]+$/);
    const surExp = new RegExp(/^[a-zA-Z\u00C0-\u017F]+$/);
    const nickExp = new RegExp(/^[a-zA-Z\u00C0-\u017F]+$/);
    const emailExp = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
    const passExp = new RegExp(/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}/);
    const descriptionExp = new RegExp(/^([A-Za-z]{1,200})$/);
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
        !nameExp.test(nameReg) ||
        !surExp.test(surNameReg) ||
        !nickExp.test(nickReg) ||
        !emailExp.test(emailReg) ||
        !passExp.test(passReg) ||
        !descriptionExp.test(descriptionReg) ||
        passReg != confirmPass
    ) {
        console.log('Datos incorrectos')
    } else {
        bcrypt.hash(passReg, 10, (err, passSecretaEncriptada) => {
            if (err) {

            } else {
                passEncriptada = passSecretaEncriptada;
            }
            let insertUser = "INSERT INTO users (name_u, surname, nick, email, password_u, description) VALUES( nameReg, surNameReg, nickReg, emailReg, passEncriptada, descriptionReg) "
            connection.query(insertUser, function (err, result) {
                if (err) throw err;
                callback(result);
            });
        })
    }

}
module.exports = {
    insertUser
};