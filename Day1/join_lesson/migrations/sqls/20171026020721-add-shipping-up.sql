CREATE TABLE shipping (
	id serial PRIMARY KEY,
	name varchar NOT NULL,
	shipping_multiplier float NOT NULL
);

INSERT INTO shipping VALUES
	(DEFAULT, 'Discounted', 0.8),
	(DEFAULT, 'Regular', 1.0);