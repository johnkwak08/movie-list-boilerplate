const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const path = require('path');
const db = require('../db');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public')

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

app.get('/api/movies', (req, res) => {
  const sqlString = 'SELECT * FROM movielist';
  db.query(sqlString, (err, results) => {
    if (err) {
      console.log('Server get request error', err); 
    } else {
      console.log('get results', results);
      res.send(results)
    }
  })
})

app.post('/api/movies', (req, res) => {
  console.log(req.body);
  const { title, watched, year, runtime, rating } = req.body;
  const sqlString = 'INSERT INTO movielist (title, watched, year, runtime, rating) VALUE (?, ?, ?, ?, ?)'
  db.query(sqlString, [title, watched, year, runtime, rating], (err, results) => {
    if (err) {
      console.log('server post req', err);
      res.sendStatus(400);
    } else {
      console.log('server res', results);
      res.sendStatus(201);
    }
  })
})

// app.post('/api/movies', (req, res) => {
//   res.sendStatuts(201);
//   res.send('hello world')
// })


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
})