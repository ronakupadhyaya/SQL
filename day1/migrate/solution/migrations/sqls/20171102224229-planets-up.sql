CREATE TABLE planets (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  moons INT
);

INSERT INTO planets (name, moons) VALUES
  ('mercury', 0),
  ('venus', 0),
  ('earth', 1),
  ('mars', 2),
  ('jupiter', 69);
