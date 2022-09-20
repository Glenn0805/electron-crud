const mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null, // or the original password : 'apaswword'
    database: 'test_imart'
});

connection.connect(function (err) {
    // in case of error
    if (err) {
        console.log(err.code);
        console.log(err.fatal);
    }
});

let query = 'SELECT * FROM history';

connection.query(query, function (err, rows, fields) {
    if (err) {
        console.log("An error ocurred performing the query.");
        console.log(err);
        return;
    }

    console.log("Query succesfully executed", rows);
});

// Close the connection
connection.end(function () {
    // The connection has been closed
});