CREATE TABLE amazon_product(
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    userRating INT
);

CREATE TABLE amazon_subproduct(
    fk_amazon_product INT,
    price DECIMAL,
    color TEXT
);