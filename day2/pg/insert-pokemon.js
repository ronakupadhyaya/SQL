"use strict";

var pokemon = require('./data/pokemon.json');

var pg = require('pg');
var pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});


// Insert Pokemon into your PokeBay database
// YOUR CODE HERE

// pool.query(`create table pokemons (
//     id serial primary key,
//     name text,
//     image_url text,
//     type text
// );`)

function insertPoke(name, url, type){
    return pool.query(`insert into pokemons (id, name, image_url, type) values (default, '${name}', '${url}', '${type}');`)
}
var pokePromises = pokemon.map(poke => insertPoke(poke.name, poke.image_url, poke.type));
Promise.all(pokePromises)
    .then(()=>{
        console.log('inserted all pokemon!');
    })
    .catch(function(err){
        console.log('there was an error', err)
    });