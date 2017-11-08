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

app.get('/animals', (req, res) => {
  const query = `
    SELECT name, sound
    FROM animals
    ` +
    (req.query.name ? 'WHERE name = $1 ': '') +
    'ORDER BY name;';
  console.log(query);
  pool.query(query, (req.query.name ? [req.query.name] : []))
    .then(result => res.json({success: true, data: result.rows}))
    .catch(error => res.json({success: false, error}));
});

app.post('/delete/:name', (req, res) => {
  pool.query(`
    DELETE
    FROM animals
    WHERE name = $1;
  `, [req.params.name])
    .then(() => res.json({success: true}))
    .catch(error => res.json({success: false, error}));
});

app.post('/create', (req, res) => {
  console.log(req.body);
  pool.query(`
    INSERT INTO animals VALUES
    ($1, $2, $3);
  `, [req.body.name, req.body.food, req.body.sound])
    .then(() => res.json({success: true}))
    .catch(error => res.json({success: false, error}));
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('listening on port ' + port);
});
