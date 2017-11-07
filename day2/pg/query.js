"use strict";

const pool = require('./pool');

const generateTable = `
    CREATE TABLE animals(
        name    TEXT,
        food    TEXT,
        sound   TEXT
    );
`;

const insertAnimal = (name, food, sound) => (
  `
    INSERT INTO animals
            (name, food, sound)
        VALUES
            ('${name}', '${food}', '${sound}');
    `
);

(async () => {
  try {
    // await pool.query(generateTable);
    const fullInsert = insertAnimal('donkey', 'carrots', 'hee-haw') +
        insertAnimal('cow', 'grass', 'moo') + insertAnimal('duck', 'seeds', 'quack');
    await pool.query(fullInsert);
    const searchMoo = `
        SELECT
            a.name
        FROM 
            animals a
        WHERE
            a.sound = 'moo'
    `;
    const result = await pool.query(searchMoo);
    console.log('The animal name is: ', result.rows[0].name);
  } catch(err) {
    console.error(err);
  }
})();
