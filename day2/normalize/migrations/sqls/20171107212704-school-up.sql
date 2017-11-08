ALTER TABLE professors
  ADD COLUMN email TEXT;

ALTER TABLE professors
  DROP COLUMN email_id;

DROP TABLE professor_emails;

ALTER TABLE courses
  ADD COLUMN professor_id INT;

ALTER TABLE professors
  DROP COLUMN course_id;

CREATE TABLE students_courses (
  student_id INT,
  course_id INT
);

ALTER TABLE students
  DROP COLUMN courses;

ALTER TABLE courses
  DROP COLUMN students;
