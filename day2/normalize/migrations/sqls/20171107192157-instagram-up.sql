/* Replace with your SQL commands */

create table users (
    username text,
    user_id serial primary key
);

create table follower_following (
    follower_id int,
    following_id int
);