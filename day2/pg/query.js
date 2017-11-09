"use strict";

// YOUR CODE HERE
var pool = require('./pool');

// pool.query('drop table animals');

// pool.query('CREATE TABLE animals(name TEXT, food TEXT, sound TEXT)')
//   .then(function(result){
//     console.log(result);
//   })
//   .catch(function(err){
//     console.log('error making table', err);
//   });

pool.query("INSERT INTO animals (name, food, sound) VALUES ('donkey', 'carrots', 'hee-haw')")
  .then(function(result2){
    console.log(result2);
  })
  .catch(function(err){
    console.log('error inserting animals', err);
  });

// pool.query("SELECT name FROM animals WHERE sound = 'moo'")
//   .then(function(result3){
//     console.log('The animal name is: ', result3.rows[0].name);
//   })
//   .catch(function(err){
//     console.log('error finding moo animal', err);
//   });

// pool.query("INSERT INTO animals (name, food, sound) VALUES ('cow', 'grass', 'moo')")
//   .then(function(result4){
//     console.log(result4);
//   })
//   .catch(function(err){
//     console.log('error inserting animals', err);
//   });

pool.query("INSERT INTO animals (name, food, sound) VALUES ('duck', 'seeds', 'quack')")
  .then(function(result5){
    console.log(result5);
  })
  .catch(function(err){
    console.log('error inserting animals', err);
  });
