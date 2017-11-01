CREATE TABLE activity_levels (
	id serial PRIMARY KEY,
	level varchar
);

INSERT INTO activity_levels VALUES
	(DEFAULT, 'Couch potato'),
	(DEFAULT, 'Moderate'),
	(DEFAULT, 'Regular'),
	(DEFAULT, 'Strenuous');