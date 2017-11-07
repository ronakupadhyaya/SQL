/* Replace with your SQL commands */
CREATE TABLE users (
    id serial primary key,
    name varchar not null,
    address varchar,
    city varchar,
    state varchar,
    zipcode int,
    age int);
