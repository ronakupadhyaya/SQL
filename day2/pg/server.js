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

app.get('/animals',function(req,res){
  var queryString = `
    SELECT
      name,
      sound
    FROM
      animals\n`
    + (req.query.name ?
    `WHERE
      name = $1\n` : '')
    +
    `ORDER BY
        name,
        sound
  ;`;
  var array = req.query.name ? [req.query.name] : [];
  pool.query(queryString,array)
    .then((result)=>{
      res.json(result.rows);
    })
    .catch((err)=>{
      res.status(400).json({error: err});
    });
});

app.post('/delete/:name',function(req,res){
  if(!req.params.name){
    res.status(401).json({error: 'Please provide the name of the animal to delete.'});
  }
  pool.query(`
    DELETE FROM
      animals
    WHERE
      name = $1
  ;`,[req.params.name])
    .then((result)=>{
      res.json({"success": true});
    })
    .catch((err)=>{
      res.status(400).json({error: err});
    });
});

app.post('/create',function(req,res){
  console.log(req.body);
  if(!req.body.name){
    res.status(401).json({error: 'Please provide an animal name.'});
    return;
  }
  if(!req.body.food){
    res.status(401).json({error: 'Please provide animal food type.'});
    return;
  }
  if(!req.body.sound){
    res.status(401).json({error: 'Please provide animal sound.'});
    return;
  }
  pool.query(`
    INSERT INTO animals ( name, food, sound )
      VALUES            ( $1,   $2,   $3    )
  ;`,[req.body.name, req.body.food, req.body.sound])
    .then((result)=>{
      res.json({"success": true});
    })
    .catch((err)=>{
      res.status(400).json({error: err});
    });
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('listening on port ' + port);
});
