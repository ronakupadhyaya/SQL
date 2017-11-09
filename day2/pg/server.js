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

var pool = require('./pool');
// YOUR CODE HERE

app.get('/animals', function(req, res) {
  if(req.query.name){
    pool.query(`SELECT * FROM animals WHERE name = $1`, [req.query.name])
      .then(function(result) {
        res.json(result.rows);
      })
      .catch(function (err) {
        res.status(400).json({error: err});
      });
  } else {
    pool.query("SELECT * FROM animals")
      .then(function(result) {
        res.json(result.rows);
      })
      .catch(function (err) {
        res.status(400).json({error: err});
      });
  }
});

app.post('/delete/:name', function(req, res) {
  pool.query(`DELETE FROM animals WHERE name = $1`, [req.params.name])
    .then(function(result) {
      res.json({"success": true});
    })
    .catch(function (err) {
      res.status(400).json({error: err});
    });
});

app.post('/create', function(req, res) {
  pool.query(`INSERT INTO animals (name, food, sound) VALUES ($1, $2, $3)`, [req.body.name, req.body.food, req.body.sound])
    .then(function(result) {
      res.json({"success": true});
    })
    .catch(function (err) {
      res.status(400).json({error: err});
    });
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('listening on port ' + port);
});
