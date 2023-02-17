const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

const { encrypt } = require('../helpers/handleBcrypt');

async function insertUser(req, res, next) {
  const { name_u, surname, alias, email, password_u } = req.body;
  
  if (!name_u || !surname || !alias || !email || !password_u) {
    console.log('Datos incorrectos');
    return res.status(400).json({ status: false, message: 'One or more required fields are missing' });
  } else {
    const passwordHash = await encrypt(password_u);
    const callDataUser = "INSERT INTO users (name_u, surname, alias, email, password_u) VALUES(?)";
    const values = [name_u, surname, alias, email, passwordHash];

    connection.query(callDataUser, [values], function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).json({ status: false, message: 'Error al insertar el usuario en la base de datos' });
      } else {
        console.log('New user inserted');
      }

      res.cookie('name_u', `${name_u}`);
      res.cookie('surname', `${surname}`);
      res.cookie('alias', `${alias}`);
      res.json({ status: true });
    });
  }
}

module.exports = { insertUser };
  