const mysql = require('mysql');

// Database Connection for Development MySQL Server
// Using Google Cloud

// read database access in the .env file... typically
// you wouldn't include .env file in normal applications

let devConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});

// check for connection to the db server
devConnection.connect(function(err) {
    if(err)
        console.error('Error connection: ' + err.stack);
    else
        console.log('Connected as thread id: ' + devConnection.threadId);
});

module.exports = devConnection;