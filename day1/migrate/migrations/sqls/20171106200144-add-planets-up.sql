create table planets (
  id serial primary key not null,
  name varchar not null,
  moons int
);

insert into planets values
  (DEFAULT, 'Mercury'),
  (DEFAULT, 'Venus'),
  (DEFAULT, 'Earth'),
  (DEFAULT, 'Mars');
