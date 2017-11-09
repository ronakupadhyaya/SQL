CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT,
  rating INT
);

CREATE TABLE subproducts (
  id SERIAL PRIMARY KEY,
  product_id INT,
  color TEXT,
  price DECIMAL
);
