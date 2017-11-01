create database testdb;
\c testdb
\l
create table users (
	id int primary key not null,
	name varchar not null,
	age int,
	address varchar,
	city varchar,
	state varchar,
	zipcode int
);

insert into users values
	(1, 'Tom', 45, '123 Broad St.', 'Douglasville', 'GA', 30135),
	(2, 'Sarah', 39, '123 Broad St.', 'Douglasville', 'GA', 30135),
	(3, 'Camille', 31, '577 Willow Glen Dr.', 'Marietta', 'GA', 30068),
	(4, 'Indiana', 10, '577 Willow Glen Dr.', 'Marietta', 'GA', 30068),
	(5, 'Luke', 29, '4242 Main St.', 'Smyrna', 'GA', 30071),
	(6, 'Natalia', 28, '4242 Main St.', 'Smyrna', 'GA', 30071),
	(7, 'Isaac', 3, '4242 Main St.', 'Smyrna', 'GA', 30071),
	(8, 'Layla', 1, '4242 Main St.', 'Smyrna', 'GA', 30071),
	(9, 'Hilary', 26, '1573 Mountain Way', 'Durango', 'CO', 81301),
	(10, 'Kevin', 28, '1573 Mountain Way', 'Durango', 'CO', 81301),
	(11, 'Fran', 63, '2324 Knoll Ridge Ln.', 'Wake Forest', 'NC', 27587),
	(12, 'Jim', 65, '2324 Knoll Ridge Ln.', 'Wake Forest', 'NC', 27587),
	(13, 'Karen', 38, '231 Third Ave.', 'Salt Lake City', 'UT', 84047),
	(14, 'Chris', 28, '1313 Mockingbird Ln.', 'San Francisco', 'CA', 94102),
	(15, 'Fred', 31, '12 LeTour Ave.', 'Bend', 'OR', 97701),
	(16, 'Karen', 14, '412 Payton Place', 'Los Angeles', 'CA', 90001),
	(17, 'George', 73, '1 Lucas Valley Rd.', 'Nicasio', 'CA', 94946),
	(18, 'James', 38, '1701 Main St.', 'Riverside', 'IA', 52327),
	(19, 'Robert', NULL, '1951 Heinlein Way', 'Colorado Srpings', 'CO', 80829),
	(20, 'Isaac', NULL, '42 Broadway', 'New York', 'NY', 10001);
