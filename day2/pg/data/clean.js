"use strict";

var pokemonArr = require('./raw/pokemon.json');
var types = {};

console.log(JSON.stringify(pokemonArr.map(pokemon => {
  return pokemon;
  pokemon.type.map(type => { types[type] = (types[type] || 0) + 1; });
  return {
    name: pokemon.name,
    image_url: pokemon.ThumbnailImage,
    types: pokemon.type
  };
}), null, 2));

// console.log(types);
