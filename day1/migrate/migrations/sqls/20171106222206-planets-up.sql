CREATE TABLE planets (
    id serial not null,
    name varchar not null,
    moons int null);

INSERT INTO planets (name, moons) VALUES
  ('mercury', 0),
  ('venus', 0),
  ('earth', 1),
  ('mars', 2),
  ('jupiter', 69);
