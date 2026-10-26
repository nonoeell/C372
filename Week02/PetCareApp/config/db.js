const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rp810810810!',
  database: 'petcare'
});

module.exports = connection;
