CREATE TABLE membership_types (
	id serial PRIMARY KEY,
	name varchar NOT NULL,
	discount float NOT NULL,
	fk_shipping int NOT NULL
);

INSERT INTO membership_types VALUES
	(DEFAULT, 'premium', 0.20, 1),
	(DEFAULT, 'regular', 0.00, 2),
	(DEFAULT, 'charter', 0.40, 1),
	(DEFAULT, 'inactive', 0.00, 2);
