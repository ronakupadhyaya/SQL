CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username text
);

CREATE TABLE follower_following (
  follower_id INT,
  following_id INT
);
