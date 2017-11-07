CREATE TABLE professor_emails (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL
);

ALTER TABLE professors
  DROP COLUMN email;

ALTER TABLE professors
  ADD COLUMN email_id INT;

ALTER TABLE courses
  DROP COLUMN professor_id;

ALTER TABLE professors
  ADD COLUMN course_id INT;

DROP TABLE students_courses;

ALTER TABLE students
  ADD COLUMN courses TEXT;

ALTER TABLE courses
  ADD COLUMN students TEXT;
