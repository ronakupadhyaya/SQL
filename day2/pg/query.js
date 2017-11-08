"use strict";

const pool = require('./pool');

pool.query(`
  CREATE TABLE animals (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    food TEXT,
    sound TEXT
  )
;`)
  .then(()=>{return pool.query(`
    INSERT INTO animals ( name,      food,       sound      )
      VALUES            ( 'donkey',  'carrots',  'hee-haw'  ),
                        ( 'cow',     'grass',    'moo'      ),
                        ( 'duck',    'seeds',    'quack'    )
  ;`);})
  .then(()=>{return pool.query(`
    SELECT
      name
    FROM
      animals
    WHERE
      sound = 'moo'
  ;`);})
  .then((result)=>{
    console.log(result.rows[0].name);
  })
  .catch((err)=>console.log(err));
