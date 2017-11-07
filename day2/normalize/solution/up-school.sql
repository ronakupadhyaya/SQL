-- professor_emails and professors has a one-to-one relationship
-- so we can put them on the same table.
-- Create an email column on professors instead.
ALTER TABLE professors
  ADD COLUMN email TEXT;

-- Get rid of the separate table and the foreign key.
ALTER TABLE professors
  DROP COLUMN email_id;

-- This table is no longer necessary since email is now on professors table
DROP TABLE professor_emails;

-- professors and courses have a one-to-many relationship.
-- Each professor has more than one course, so we need to place the foreign
-- key on the courses table
ALTER TABLE courses
  ADD COLUMN professor_id INT;

ALTER TABLE professors
  DROP COLUMN course_id;

-- students and courses have a many-to-many relationship so we need to
-- create a junction table and have a foreign key there.
CREATE TABLE students_courses (
  student_id INT,
  course_id INT
);

-- These coulmns are no longer necessary as the foreign keys have moved to
-- students_courses.
ALTER TABLE students
  DROP COLUMN courses;

ALTER TABLE courses
  DROP COLUMN students;
