CREATE TABLE table1 (
	id serial PRIMARY KEY,
	name varchar NOT NULL);

INSERT INTO table1 VALUES
	(DEFAULT, 'Fred'),
	(DEFAULT, 'Daphne'),
	(DEFAULT, 'Velma'),
	(DEFAULT, 'Shaggy'),
	(DEFAULT, 'Scooby');

CREATE TABLE table2 (
	id serial PRIMARY KEY,
	name varchar NOT NULL);

INSERT INTO table2 VALUES
	(DEFAULT, 'Ghost'),
	(DEFAULT, 'Monster'),
	(DEFAULT, 'Zombie'),
	(DEFAULT, 'Scooby');
