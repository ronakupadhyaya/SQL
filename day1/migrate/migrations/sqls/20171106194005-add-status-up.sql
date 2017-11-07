/* Replace with your SQL commands */
ALTER TABLE users ADD status varchar;
UPDATE users SET status = 'working';
UPDATE users SET status = 'surfing' WHERE state = 'CA';
