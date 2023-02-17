const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

async function getUserData (req, res, next){
    const alias = req.params.alias;
    const dataQuery = `Select description_u, interests From users Where alias = ?`;
    await connection.query(dataQuery, [alias], (error, results) => {
        if(error){
            console.error(error);
            res.status(500).json({message : 'Base data connection failed'})
        }
        res.json({
            description_u: results[0].description_u,
            interests: JSON.parse(results[0].interests),
        });
    });
}
module.exports = { getUserData }