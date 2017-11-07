CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT
);

CREATE TABLE follows(
    follower INT,
    followee INT
);