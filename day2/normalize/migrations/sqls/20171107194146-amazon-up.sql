CREATE TABLE amazon_product (
  id SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT,
  rating INT
);

CREATE TABLE amazon_subproduct (
  id SERIAL PRIMARY KEY,
  price DECIMAL,
  color TEXT,
  product_id INT
);
