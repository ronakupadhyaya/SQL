"use strict";

// YOUR CODE HERE
const pool = require('./pool');

// ASYNC
async function doAnimalQueries() {

  try {
    await pool.query(`DROP TABLE animals`);
    await pool.query(`
      CREATE TABLE animals(
        id serial PRIMARY KEY,
        name TEXT,
        food TEXT,
        sound TEXT
      )
    `);
    const res = await pool.query(`
      INSERT INTO animals
        (name, food, sound)
        VALUES
          ('donkey', 'carrots', 'hee-haw'),
          ('cow', 'grass', 'moo'),
          ('duck', 'seeds', 'quack')
      `
    );
    console.log(res);
  } catch (err) {
    console.log(err.stack);
  }

}

doAnimalQueries();

// PROMISES
// pool.query(`DROP TABLE animals`)
// .then(() => {
//   pool.query(`CREATE TABLE animals(
//     id serial PRIMARY KEY,
//     name TEXT,
//     food TEXT,
//     sound TEXT
//   )`)
//   .then(() => {
//     pool.query(`INSERT INTO animals
//       (name, food, sound)
//       VALUES
//         ('donkey', 'carrots', 'hee-haw'),
//         ('cow', 'grass', 'moo'),
//         ('duck', 'seeds', 'quack')
//     `);
//   })
//   .then(() => pool.query(`SELECT * FROM animals WHERE sound='moo'`))
//   .then(res=> console.log(`The ${res.rows[0].name} goes ${res.rows[0].sound}`));
// })
// .catch(err => console.log(err));

