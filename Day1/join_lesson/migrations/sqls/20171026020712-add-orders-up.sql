CREATE TABLE orders (
	id serial PRIMARY KEY,
	fk_customers int NOT NULL,
	fk_products int NOT NULL,
	quantity int NOT NULL,
	order_status varchar
);

INSERT INTO orders VALUES
	(DEFAULT, 1, 2, 10, 'Shipped'),
	(DEFAULT, 1, 1, 5, 'In process'),
	(DEFAULT, 2, 3, 1, 'In process');