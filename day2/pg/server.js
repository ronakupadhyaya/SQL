"use strict";

var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// YOUR CODE HERE
const pool = require('./pool');

app.get('/animals', (req, res) => {
  if (!req.query.name) {
    pool.query('SELECT name, sound FROM animals')
    .then((animals) => {
      res.json(animals.rows);
    });
  } else {
    pool.query(`SELECT name, sound FROM animals WHERE name=$1`, [req.query.name])
    .then(animals => {
      res.json(animals.rows);
    });
  }
});

app.get('/delete/:name', (req, res) => {
  pool.query(`DELETE FROM animals WHERE name=$1`, [req.params.name])
  .then(resp => {
    res.json({success: true});
  })
  .catch(err => res.json({err}));
});

app.post('/create', (req, res) => {
  const query = {
    text: 'INSERT INTO animals(name, food, sound) VALUES($1, $2, $3)',
    values: [req.body.name, req.body.food, req.body.sound]
  };
  pool.query(query)
  .then(resp => res.json({success: true}))
  .catch(err => res.json({err}));
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('listening on port ' + port);
});
