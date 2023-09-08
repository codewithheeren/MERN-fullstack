// This just to check db connection working fine or not.
// This program have connection properties.
// This makes db connections and retireve item table data.

const mysql = require("../expressJS/node_modules/mysql");

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'test_db',
  waitForConnections: true,
  connectionLimit: 10
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

connection.query('SELECT * FROM item', (err, resultSet) => {
  if (err) throw err;
  console.log('Data fetched successfully:');
  console.log(resultSet);
});

connection.end();
