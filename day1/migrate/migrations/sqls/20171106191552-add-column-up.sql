ALTER TABLE users
  ADD COLUMN status varchar;
UPDATE users
  set status='surfing'
  where state='CA';
