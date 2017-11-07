ALTER TABLE users ADD COLUMN status TEXT;

UPDATE users
  SET status = 'surfing'
  WHERE state = 'CA';

UPDATE users
  SET status = 'working'
  WHERE state <> 'CA';
