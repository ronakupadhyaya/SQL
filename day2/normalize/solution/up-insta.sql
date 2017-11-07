-- instagram_users have a many-to-many relationship to other instagram_users
-- so we create a junction table to represent that relationship.
CREATE TABLE instagram_users (
  id SERIAL PRIMARY KEY,
  username TEXT
);

CREATE TABLE instagram_follower_following (
  follower_id INT,
  following_id INT
);

-- For example the following query will get the usernames of all
-- users that are followed by the user with id 12345
--
-- SELECT username
--   FROM instagram_follower_following
--   JOIN instagram_users
--   ON instagram_follower_following.following_id = instagram_users.id
--   WHERE instagram_follower_following.follower_id = 12345
