CREATE TABLE planets (
    id serial primary key not null,
    name varchar not null,
    moons int);


INSERT INTO planets VALUES (DEFAULT, 'mercury', 0);
INSERT INTO planets VALUES (DEFAULT, 'venus', 0);
INSERT INTO planets VALUES (DEFAULT, 'earth', 1);
INSERT INTO planets VALUES (DEFAULT, 'mars', 2);
INSERT INTO planets VALUES (DEFAULT, 'jupiter', 69);
