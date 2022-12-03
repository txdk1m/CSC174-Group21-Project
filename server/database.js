const mysql = require('mysql');

// Database Connection for Development MySQL Server
// Using Google Cloud

// read database access in the .env file... typically
// you wouldn't include .env file in normal applications

// create a pool connection instead of a single instance
let devConnection = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    socketPath: `/cloudsql/${process.env.DB_INSTANCE_CONNECTION_NAME}`
});

module.exports = devConnection;