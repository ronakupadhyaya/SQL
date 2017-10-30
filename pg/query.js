"use strict";

var pool = require('./pool');

function populateTable() {
  return pool.query(queries[0])
    .then(function() {
      return pool.query(queries[1]);
    })
    .then(function() {
      return pool.query(queries[2]);
    });
}

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
  `SELECT * FROM animals`
];

pool.query(queries[0])
  .then(function() {
    return pool.query(queries[1]);
  })
  .then(function() {
    return pool.query(queries[2]);
  })
  .then(function(res) {
    console.log(res.rows);
  })
  .catch(function(err) {
    console.log('Error', err);
  });
