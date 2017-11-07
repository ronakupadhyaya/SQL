/* Replace with your SQL commands */
CREATE TABLE planets (
    id serial primary key not null,
    name varchar not null,
    moons int);

INSERT INTO planets VALUES (DEFAULT, 'Venus', 2);
INSERT INTO planets VALUES (DEFAULT, 'Mars', 1);
INSERT INTO planets VALUES (DEFAULT, 'Jupiter');
INSERT INTO planets VALUES (DEFAULT, 'Mercury', 3);
