"use strict";

// YOUR CODE HERE

var pool = require('./pool.js')

pool.query(`
drop table animals;
`)
.then(function(res){
    console.log('deleted animals with no problems');

    pool.query(`
    create table animals (
        name text,
        food text,
        sound text
    );`)
    .then(function(res){
        // console.log(res)
        return pool.query(`
        insert into animals values ('donkey', 'carrots', 'hee-haw');
        insert into animals values ('cow', 'grass', 'moo');
        insert into animals values ('duck', 'seeds', 'quack');
        `)
    })
    .then(function(res) {
        return pool.query(`
            select * from animals a where sound = 'moo';
        `)
    })
    .then(function(res){
        return JSON.stringify(res.rows)
    })
    .then(function(res){
        console.log(res);
    })
    .catch(function(err){
        console.log('there was an error', err) 
    });
})
.catch(function(err){
    console.log('there was an error deleting the animals tables');
})

