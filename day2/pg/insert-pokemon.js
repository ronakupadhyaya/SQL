"use strict";
const pool = require('./pool');
var pokemon = require('./data/pokemon.json');


function insertPokemon(pokemon) {
    return pool.query('INSERT INTO pokemon (name, picture, type) VALUES ($1, $2, $3)',
    [pokemon.name, pokemon.image_url, pokemon.type]);
}

var pokemonPromises = pokemon.map(each => insertPokemon(each));
Promise.all(pokemonPromises)
    .then(() => {
        console.log('Saved all pokemon!');
    });
// var pokemonPromises = pokemon.map(pokemonData => insertPokemonData(pokemonData));
// Promise.all(pokemonPromises)
//     .then(() => {
//         console.log('Saved all pokemon!');
//     });
