/* Replace with your SQL commands */
CREATE TABLE planets (
  id serial primary key,
  name varchar not null,
  moons int
);

INSERT into planets VALUES (default, 'Mercury', 1000);
INSERT into planets VALUES (default, 'Venus', 10);
INSERT into planets VALUES (default, 'Earth', 1);
INSERT into planets VALUES (default, 'Mars', 2);
INSERT into planets VALUES (default, 'Jupiter', 7);
