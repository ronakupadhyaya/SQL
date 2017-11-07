CREATE TABLE planets (
    id serial primary key,
    name varchar not null,
    moons int);

INSERT INTO planets VALUES
  (DEFAULT, 'Mercury', 4),
  (DEFAULT, 'Venus', 3),
  (DEFAULT, 'Earth', 3),
  (DEFAULT, 'Mars', 3),
  (DEFAULT, 'Jupiter', 3);
