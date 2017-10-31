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


// TODO Part 3. remove
var pool = require('./pool');
app.get('/animals', function(req, res) {
  var q;
  if (req.query.name) {
    q = pool.query('SELECT name, sound FROM animals WHERE name = $1 ORDER BY name', [req.query.name]);
  } else {
    q = pool.query('SELECT name, sound FROM animals ORDER BY name');
  }

  q
    .then(function(result) {
      res.json(result.rows);
    })
    .catch(function (err) {
      res.status(400).json({error: err});
    });
});

app.post('/delete/:name', function(req, res) {
  pool.query(`DELETE FROM animals WHERE name = $1`, [req.params.name], function(err, result) {
    if (err) {
      res.status(400).json({error: err});
    } else {
      res.json({ success: true });
    }
  });
});

app.post('/create', function(req, res) {
  pool.query(`INSERT INTO animals (name, food, sound) VALUES ($1, $2, $3)`,
    [req.body.name, req.body.food, req.body.sound])
    .then(function(result) {
      res.json({ success: true });
    })
    .catch(function(error) {
      res.status(400).json({error});
    });
});
// TODO

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('listening on port ' + port);
});
