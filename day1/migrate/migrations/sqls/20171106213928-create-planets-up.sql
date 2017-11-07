CREATE TABLE planets(
	id serial primary key not null,
	name varchar not null,
	moons int
);

INSERT INTO planets (name)
	VALUES	('Mercury'),
		('Venus'),
		('Earth'),
		('Mars'),
		('Jupiter')
;
