"use strict";
var pool = require('./pool.js');

pool.query(`CREATE TABLE IF NOT EXISTS animals (name varchar, food varchar, sound varchar)`)
  .then(() => {
    pool.query(`INSERT INTO animals (name, food, sound)
    VALUES ('donkey', 'carrots', 'hee-haw'), ('cow', 'grass', 'moo'), ('duck', 'seeds', 'quack')`)
  })
  .then(() => {
    return pool.query(`SELECT name, sound FROM animals WHERE name = 'cow'`);
  })
  .then((sound) => {
    console.log(sound);
  })
  .catch((err) => {
    console.log('Error on your animal query', err);
  })
