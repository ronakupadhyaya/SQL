-- need to create a table for the users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT
);

-- following users is a many to many relationship so we need a junction or join table
CREATE TABLE user_followers_following (
  follower_id INT,
  following_id INT
);
