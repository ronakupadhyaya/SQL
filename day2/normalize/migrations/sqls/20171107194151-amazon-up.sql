CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT,
  rating INT
);
CREATE TABLE subproducts (
  product_id INT,
  price DECIMAL,
  color TEXT
);
