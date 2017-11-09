CREATE TABLE planets (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  moons int
);

INSERT INTO planets (name, moons) VALUES
  ('mercury', 0),
  ('venus', 0),
  ('earth', 1),
  ('mars', 2),
  ('jupiter', 69);
