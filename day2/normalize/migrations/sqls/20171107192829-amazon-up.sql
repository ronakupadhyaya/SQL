/* Replace with your SQL commands */

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT,
  user_rating INT
);

CREATE TABLE subproducts (
  id SERIAL PRIMARY KEY,
  product_id INT,
  price DECIMAL,
  color TEXT
);