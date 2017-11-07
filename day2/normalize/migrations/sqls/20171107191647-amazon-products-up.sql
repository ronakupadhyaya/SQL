CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  avg_rating DECIMAL
);

CREATE TABLE sub_products (
  id SERIAL PRIMARY KEY,
  fk_products INT NOT NULL,
  price DECIMAL,
  color TEXT
);
