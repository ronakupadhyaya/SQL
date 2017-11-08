"use strict";
const pool = require('./pool');

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

app.get('/animals', function(req, res) {
  if (req.query.name){
      pool.query(`SELECT name, sound FROM animals where name = $1;`, [req.query.name])
          .then(function(result) {
            res.json(result.rows);
          })
          .catch(function (err) {
            res.status(400).json({error: err});
          });
  } else {
      pool.query(`SELECT name, sound FROM animals order by name asc;`)
          .then(function(result) {
            res.json(result.rows);
          })
          .catch(function (err) {
            res.status(400).json({error: err});
          });
    }
});

app.post('/delete/:name', function(req, res) {
  if (req.params.name){
    pool.query(`delete from animals where name = $1;`, [req.params.name])
    .then(function(result) {
      res.json({success: true});
    })
    .catch(function (err) {
      res.status(400).json({error: err});
    });
  } else {
    throw 'You cannot delete everything. Please specify something to delete'
  }
});

app.post('/create', function(req, res){
  console.log(req.body)
  pool.query(`
    insert into animals values ('${req.body.name}', '${req.body.food}', '${req.body.sound}');
  `)
.then(function(result){
  res.json({success: true});
})
.catch(function (err) {
  res.status(400).json({error: err});
});
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('listening on port ' + port);
});
