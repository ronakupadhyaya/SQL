"use strict";

// var pokemon = require('./data/pokemon.json');
// var pool = require('./pool.js');

console.log('ig')

//CREATE CATALOG AND LOAD ALL DATA
// function insertPokemon(pokemon) {
//   return pool.query('INSERT INTO catalog (name, image, type) VALUES ($1, $2, $3)',
//     [pokemon.name, pokemon.image_url, pokemon.type]);
// }
//
// var userPromises = pokemon.map(each => insertPokemon(each));
//
// pool.query(`CREATE TABLE catalog (pokemonid serial, name varchar, image varchar, type varchar)`)
//   .then(() => {
//     Promise.all(userPromises)
//       .then(() => {
//         console.log('Saved all users!');
//       });
//   });

// user (userid, first, last, username, password, email, phonenumber, address)
// catalog (pokemonid, name, picture, type)
// auction (auctionid, pokemonid, userid, startdate, duration, startingbid, reserveprice, status)
// bids(bidid, auctionid, userid, bidtime, bidvalue)
