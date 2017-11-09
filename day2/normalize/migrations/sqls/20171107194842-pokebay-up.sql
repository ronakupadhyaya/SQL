/*pokeuser-auction is one-many*/
/*auction-pokemon is one-one*/
/*pokeuser-bids is one-many*/
/*auction-bids is one-many*/
/*user-watchlist is one-one*/
/*watchlist-auction is many-many*/


CREATE TABLE poke_user (
  id SERIAL PRIMARY KEY,
  name_last TEXT,
  name_first TEXT,
  address TEXT,
  username TEXT,
  password TEXT,
  email TEXT,
  phone TEXT,
  location TEXT,
  watchlist_id INT
);

CREATE TABLE pokemon (
  id SERIAL PRIMARY KEY,
  name TEXT,
  image_url TEXT,
  type TEXT
);

CREATE TABLE auctions (
  id SERIAL PRIMARY KEY,
  pokemon_id INT,
  opening_bid INT,
  reserve_price INT,
  auction_length INT,
  shipping_from TEXT,
  description TEXT,
  creator_id INT,
  create_date DATE,
  status TEXT,
  start_date DATE,
  time_left INT
);

CREATE TABLE bids (
  id SERIAL PRIMARY KEY,
  user_id INT,
  auction_id INT,
  create_date DATE,
  amount INT
);

CREATE TABLE watchlist (
  id SERIAL PRIMARY KEY
);

CREATE TABLE join_auction_watchlist (
  auction_id INT,
  watchlist_id INT
);
