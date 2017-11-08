"use strict";

// YOUR CODE HERE
var pool = require ('./pool');

pool.query(`CREATE TABLE animals(
  id SERIAL PRIMARY KEY,
  name varchar,
  food varchar,
  sound varchar
);`)
  .then((result) => {
    return pool.query(`INSERT INTO animals (name, food, sound )
      VALUES ('donkey', 'carrots', 'hee-haw'), ('cow', 'grass', 'moo'), ('duck', 'seeds', 'quack');`);
  })
  .then((result) => {
    return pool.query(`SELECT name FROM animals WHERE sound = 'moo';`);
  })
  .then((result) => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
