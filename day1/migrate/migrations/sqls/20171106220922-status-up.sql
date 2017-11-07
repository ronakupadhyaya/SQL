ALTER TABLE users
	ADD COLUMN status varchar;

UPDATE users
  SET status =
   CASE
    WHEN state = 'CA' THEN 'surfing'
   ELSE 'working'
  END;
