"use strict";

var pool = require('./pool');

// YOUR CODE HERE

// TODO remove
var queries = [
  `CREATE TABLE IF NOT EXISTS animals (
    name TEXT PRIMARY KEY,
    favorite_fool TEXT NOT NULL,
    sound TEXT NOT NULL
  )`,
  `INSERT INTO animals VALUES
    ('donkey', 'carrots', 'hee-haw'),
    ('cow', 'grass', 'moo'),
    ('duck', 'quack', 'seeds') ON CONFLICT DO NOTHING`,
  `SELECT name FROM animals WHERE sound = 'moo'`
];

pool.query(queries[0])
  .then(function() {
    return pool.query(queries[1]);
  })
  .then(function() {
    return pool.query(queries[2]);
  })
  .then(function(res) {
    console.log(res);
    console.log('The animal name is: ', res.rows[0].name);
  })
  .catch(function(err) {
    console.log('Error', err);
  });
// TODO
