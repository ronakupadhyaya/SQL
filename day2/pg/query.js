"use strict";

var pool = require('./pool');
pool.query(`CREATE TABLE animals (
  name TEXT,
  food TEXT,
  sound TEXT
);`)
  .then(() => pool.query(
    `INSERT INTO animals VALUES
  ('donkey', 'carrots', 'hee-haw'),
  ('cow', 'grass', 'moo'),
  ('duck', 'seeds', 'quack');`
  ))
  .then(() => pool.query(
    `SELECT name
  from animals
  where sound = 'moo';`
  ))
  .then(result => console.log(result.rows[0].name))
  .catch(err => console.log(err));
