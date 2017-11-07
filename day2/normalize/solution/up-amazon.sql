-- products has a one-to-many relationship to subproducts.
-- We represent this relationship by adding a foreign key product_id to
-- to the subproducts table.
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

-- For example, this query will get the names, colors, and prices of all
-- subproducts:
-- SELECT products.name, subproducts.color, subproducts.price
--   FROM products
--   JOIN subproducts
--     ON products.id = subproducts.product_id;
