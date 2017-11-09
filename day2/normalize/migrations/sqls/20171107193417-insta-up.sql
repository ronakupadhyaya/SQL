CREATE TABLE insta_users (
  id SERIAL PRIMARY KEY,
  username TEXT
);

CREATE TABLE follower_following (
  follower_id INT,
  following_id INT
);
