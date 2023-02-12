const mysql = require('mysql');
const { encrypt } = require('../helpers/handleBcrypt');

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

async function updateUser(req, res) {
    const { password_u, description_u, interests, profile_image } = req.body;
    const user_id = req.cookies.user_id;

    const encryptedPassword = await encrypt(password_u);

    const updateUserQuery = `UPDATE users SET password_u = ?, description_u = ?, interests = ?, profile_image = ? where user_id = ?`;
    const values = [encryptedPassword, description_u, interests, profile_image, user_id];

    connection.query(updateUserQuery, values, function(error, result) {
        if (error) {
            throw error;
        } else {
            res.status(200).json({
                message: 'Usuario actualizado correctamente'
            });
            connection.end();
        }
    });
}

module.exports = { updateUser };


// $2a$10$GfN6Ud/1U3YR/EEoQf8SB.APliMfpODRPyOzBAg/O45tWKIAhBI1K