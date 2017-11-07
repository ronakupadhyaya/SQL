ALTER TABLE users
  ADD status varchar;

UPDATE users
  SET status = 'surfing'
  WHERE state = 'CA';

UPDATE users
  SET status = 'working'
  WHERE NOT state = 'CA';
