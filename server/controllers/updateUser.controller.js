const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});



async function updateDescription(req, res) {
    const alias = req.params.alias;
    const { description_u, } = req.body;

    const updateUserQuery = `UPDATE users SET description_u = ? where alias = ?;`;
    const values = [description_u, alias];

    connection.query(updateUserQuery, values, function (error, result) {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'An error ocurred updating the user' });
        } else {
            res.status(200).json({
                message: 'The user has been updated'
            });

        }
    });
}
async function updateInterests(req, res) {
    const alias = req.params.alias;
    const { interests } = req.body;

    const updateUserQuery = `UPDATE users SET interests = ? where alias = ?;`;
    const values = [JSON.stringify(interests), alias];

    connection.query(updateUserQuery, values, function (error, result) {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'An error ocurred updating the user' });
        } else {
            res.status(200).json({
                message: 'The user has been updated'
            });

        }
    });
}



module.exports = {
    updateDescription,
    updateInterests
};
