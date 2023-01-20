const mysql = require('mysql');
const bcrypt = require('bcrypt');
const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});


function insertUser(req, callback) {
    const nameExp = new RegExp(/[a-zA-Z\u00C0-\u017F]/);
    const surExp = new RegExp(/[a-zA-Z\u00C0-\u017F]/);
    const nickExp = new RegExp(/[a-zA-Z\u00C0-\u017F]/);
    const emailExp = new RegExp(/[^@]+@[^@]+\.[a-zA-Z]{2,}/);
    const passExp = new RegExp(/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}/);
    const descriptionExp = new RegExp(/^([A-Za-z]{1,500})/);
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
          
            let insertUser = `INSERT INTO users (user_id, name_u, surname, nick, email, password_u, description_u) VALUES(NULL, ${nameReg}, ${surNameReg}, ${nickReg}, ${emailReg}, ${passReg}, ${confirmPass}, ${descriptionReg})`
            con.query(insertUser, function (err, result)  {
                if(err) throw err;
                callback(result)
            })
        });
      
        
    }
    
      
   
} 

module.exports = {
    insertUser
};