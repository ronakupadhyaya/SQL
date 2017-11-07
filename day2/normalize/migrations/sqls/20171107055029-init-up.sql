CREATE TABLE professors (
  id SERIAL PRIMARY KEY,
  professor_name TEXT,
  email_id INT,
  course_id INT
);

CREATE TABLE professor_emails (
  id SERIAL PRIMARY KEY,
  email TEXT
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  student_name INT,
  courses TEXT
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  course_name TEXT,
  students TEXT
);

-- normalize professors
ALTER TABLE professors DROP COLUMN email_id;
ALTER TABLE professors ADD COLUMN email TEXT;
ALTER TABLE professors DROP COLUMN course_id;
ALTER TABLE professors RENAME COLUMN professor_name TO name;
DROP TABLE professor_emails;

-- normalize students
ALTER TABLE students ALTER COLUMN student_name SET DATA TYPE TEXT;
ALTER TABLE students RENAME COLUMN student_name TO name;
ALTER TABLE students DROP COLUMN courses;

-- normalize courses
ALTER TABLE courses DROP COLUMN students;
ALTER TABLE courses RENAME COLUMN course_name TO name;
