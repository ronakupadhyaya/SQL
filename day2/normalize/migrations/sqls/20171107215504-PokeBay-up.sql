CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstName TEXT,
  lastName TEXT,
  address TEXT,
  city TEXT,
  state TEXT,
  zipcode INT,
  userName TEXT,
  password TEXT,
  email TEXT,
  phone INT
);

CREATE TABLE pokemon (
  name TEXT,
  picture TEXT,
  type TEXT
);
