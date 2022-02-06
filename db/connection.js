const mysql = require('mysql2');
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Jejefamysql1!',
      database: 'employee_tracker_db'
    },
    console.log('Connected to the employee tracker Db')
);

module.exports = db;
