const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();
const multer = require('multer');
const uploadData = multer({dest: './upload'})

app.get('/api/main', (req, res) => {
    connection.query(
      "SELECT * FROM TEST WHERE isActive = 0",
      (err, rows, fields) => {
        res.send(rows);
      }
    );
});

app.use('/images', express.static('/upload'));

app.post('/api/main', uploadData.single('images'), (req, res) => {
  let sql = 'INSERT INTO TEST VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)';
  let ap = req.body.ap;
  let main = req.body.main;
  let main_img = '/images/' + req.file.filename;
  let sub1 = req.body.sub1;
  let sub1_img = '/images/' + req.file.filename;
  let sub2 = req.body.sub2;
  let sub2_img = '/images/' + req.file.filename;
  let chef1 = req.body.chef1;
  let chef2 = req.body.chef2;

  let params = [ap, main, main_img, sub1, sub1_img, sub2, sub2_img, chef1, chef2];
  connection.query(sql, params, (err, rows, fields) => {
    console.log(err);
    console.log(rows);
    res.send(rows);
  })
});

app.listen(port, ( ()=> console.log(`Listening on port: ${port}`)));

app.delete('/api/main/:id', (req, res) => {
  let sql = 'UPDATE TEST SET isActive = 1 WHERE id = ?';
  let params = [req.params.id];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  })
})