// build your database

const mysql = require('mysql');
const db = mysql.createConnection({
  user : 'root',
  password : 'mysql',
  database : 'ebayDB'
});

db.connect();

// db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// db.end();

module.exports = db;