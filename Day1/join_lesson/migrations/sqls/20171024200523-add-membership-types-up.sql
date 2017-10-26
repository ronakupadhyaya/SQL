CREATE TABLE membership_types (
	id serial primary key,
	name varchar not null,
	discount float not null,
	shipping_index int not null
);

INSERT INTO membership_types VALUES
	(DEFAULT, 'premium', 0.20, 1),
	(DEFAULT, 'regular', 0.00, 2),
	(DEFAULT, 'charter', 0.40, 1),
	(DEFAULT, 'inactive', 1.10, 2);
