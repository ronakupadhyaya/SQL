CREATE TABLE products (
	id serial PRIMARY KEY,
	name varchar NOT NULL,
	price float NOT NULL,
	quantity_avaiable int NOT NULL
);

INSERT INTO products VALUES
	(DEFAULT, 'Garmin eTrex 30x', 299.00, 153),
	(DEFAULT, 'Garmin GPSMap 64st', 249.99, 43),
	(DEFAULT, 'Magellen eXplorist GC', 139.95, 51);