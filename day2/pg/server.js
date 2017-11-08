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
var pool = require('./pool.js');

app.get('/animals', function(req, res) {
  pool.query(`SELECT name, sound FROM animals WHERE name = $1 ORDER BY name`, [req.query.name])
  .then(function(result) {
    res.json(result.rows);
      })
  .catch(function (err) {
    res.status(400).json({error: err});
      });
})

app.post('/delete', function(req, res) {
  pool.query(`DELETE FROM animals WHERE name = $1`, [req.query.name])
    .then(function(res) {
      res.send('Success!')
    })
    .catch(function (err) {
      res.status(400).json({error: err});
    });
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('listening on port ' + port);
});
