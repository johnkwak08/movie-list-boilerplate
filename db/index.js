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

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/movies', {useNewUrlParser: true, useUnifiedTopology: true})
//   .then(() => console.log('Connected to mongodb'))
//   .catch(() => console.log('error'));

// const movieSchema = new mongoose.Schema({
//     movieTitle: String, 
//     watched: Boolean, 
//     year: Number, 
//     runtime: String, 
//     rating: Number
// });

// const Movie = mongoose.model('Movie', movieSchema);

// module.exports = Movie; 




