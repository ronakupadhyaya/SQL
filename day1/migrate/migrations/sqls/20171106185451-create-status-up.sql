/* Replace with your SQL commands */
ALTER TABLE users
	ADD COLUMN status varchar;

UPDATE users
	SET status = 'surfing'
  WHERE state = 'CA';

UPDATE users
	SET status = 'working'
  WHERE NOT state = 'CA';
