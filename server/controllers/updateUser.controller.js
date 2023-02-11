const mysql = require('mysql');
const { encrypt } = require('../helpers/handleBcrypt');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
async function updateUser(req, res) {
    const {
        password_u,
        confirm_password,
        description,
        insterests,
        profile_image,
    } = req.body;
    // const user_id = req.cookies;
    let updateUser = `UPDATE users SET profile_image where user_id = "${user_id}"`;
    connection.query(updateUser, [profile_image], function(error, res){
        if(error){
            throw error;
        }
        else{
            console.log(res)
        } 
    })
};
module.exports = {updateUser};