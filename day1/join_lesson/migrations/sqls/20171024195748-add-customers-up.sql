CREATE TABLE customers (
	id serial PRIMARY KEY,
	name_last varchar NOT NULL,
	name_first varchar NOT NULL,
	address varchar,
	city varchar,
	state varchar,
	zip int,
	birthdate date,
	fk_membership_types int,
	fk_activity_levels int
);

INSERT INTO customers VALUES
	(DEFAULT, 'Flintstone', 'Fred', '345 Cave Stone Rd.', 'Bedrock City', 'AZ', 86046, '1982-02-10', 1, 1),
	(DEFAULT, 'Flintstone', 'Wilma', '345 Cave Stone Rd.', 'Bedrock City', 'AZ', 86046, '1984-05-23', 1, 3),
	(DEFAULT, 'Flintstone', 'Pebbles', '345 Cave Stone Rd.', 'Bedrock City', 'AZ', 86046, '1998-09-17', 4, 4),
	(DEFAULT, 'Rubble', 'Barney', '347 Cave Stone Rd.', 'Bedrock City', 'AZ', 86046, '1984-05-23', 2, 2),
	(DEFAULT, 'Rubble', 'Betty', '347 Cave Stone Rd.', 'Bedrock City', 'AZ', 86046, '1984-05-23', 3, 3),
	(DEFAULT, 'Rubble', 'Bam bam', '347 Cave Stone Rd.', 'Bedrock City', 'AZ', 86046, '1999-06-14', NULL, 4);
