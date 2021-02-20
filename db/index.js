const mysql = require('mysql');

const connection = mysql.createConnection({
    user: 'student',
    password: 'student',
    database: 'movies'
});

connection.connect((err) => {
    if (err) {
        console.log('error connecting', err);
    } else {
        console.log('Connected to db!');
    }
});

module.exports = connection;
