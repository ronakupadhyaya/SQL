CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  name_first TEXT,
  name_last TEXT,
  street_address TEXT,
  city TEXT,
  state TEXT,
  zipcode TEXT,
  email TEXT,
  phone TEXT
);

CREATE TABLE pokemon (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT
);

CREATE TABLE auctions (
  id SERIAL PRIMARY KEY,
  fk_users INT NOT NULL,
  fk_pokemon INT NOT NULL,
  start_date TIMESTAMP NOT NULL,
  duration_days INT NOT NULL,
  opening_bid DECIMAL NOT NULL,
  reserve_price DECIMAL,
  shipping_from TEXT NOT NULL,
);

CREATE TABLE bids (
  id SERIAL PRIMARY KEY,
  fk_users INT NOT NULL,
  fk_auctions INT NOT NULL,
  bid_time TIMESTAMP NOT NULL,
  amount DECIMAL NOT NULL
);

CREATE TABLE watchlists (
  id SERIAL PRIMARY KEY,
  fk_users INT NOT NULL,
  fk_auctions INT NOT NULL
);
