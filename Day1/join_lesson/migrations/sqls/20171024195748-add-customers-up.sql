CREATE TABLE customers (
	id serial primary key,
	name_last varchar not null,
	name_first varchar not null,
	address varchar,
	city varchar,
	state varchar,
	zip int,
	birthdate date,
	membership_type int
);

INSERT INTO customers VALUES
	(DEFAULT, 'Flintstone', 'Fred', '345 Cave Stone Rd.', 'Bedrock City', 'AZ', 86046, '1982-02-10', 1),
	(DEFAULT, 'Flintstone', 'Wilma', '345 Cave Stone Rd.', 'Bedrock City', 'AZ', 86046, '1984-05-23', 1);
