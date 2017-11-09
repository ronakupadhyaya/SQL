"use strict";

var pool = require('./pool');

pool.query('DROP TABLE animals')
  .then((result) => {
    return pool.query(`CREATE TABLE animals (
    id serial primary key,
    name varchar,
    food varchar,
    sound varchar
  );`)
  })
  .then((result) => {
    return pool.query(`INSERT INTO animals (name, food, sound)
      VALUES('donkey', 'carrots', 'hee-haw'), ('cow', 'grass', 'moo'), ('duck', 'seeds', 'quack');`)
  })
  .then((result) => {
    return pool.query(`SELECT name
      FROM animals
      WHERE sound = 'moo';`)
  })
  .then((result) => console.log('The animal is: ' + result.rows[0].name))
  .catch((err) => console.log(err));
