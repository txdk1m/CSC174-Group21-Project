const mysql = require('mysql');
require('dotenv').config()

// Database Connection for Development ClearDB MySQL Server
// Using Heroku

// create a pool connection instead of a single instance
let devConnection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

devConnection.getConnection(function (err) {
    if (err) throw err;
    console.log('MySQL Connected!');
});

module.exports = devConnection;