/* Replace with your SQL commands */

CREATE TABLE planets(
    id      serial NOT NULL,
    name    varchar NOT NULL,
    moons   int
);

INSERT INTO planets
    (name, moons)
VALUES
    ('Mercury', 0),
    ('Venus', 0),
    ('Earth', 1),
    ('Mars', 2),
    ('Jupiter', 69);