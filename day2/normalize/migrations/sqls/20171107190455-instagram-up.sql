CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL
);

CREATE TABLE follows (
  id SERIAL PRIMARY KEY,
  fk_users_follower INT NOT NULL,
  fk_users_following INT NOT NULL
);
