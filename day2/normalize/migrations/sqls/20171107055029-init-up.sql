CREATE TABLE professors (
  id SERIAL PRIMARY KEY,
  professor_name TEXT
);

CREATE TABLE professor_emails (
  id SERIAL PRIMARY KEY,
  email TEXT,
  fk_professor_id INT
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  student_name INT
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  course_name TEXT,
  fk_professor_id INT
);

CREATE TABLE enrollment (
  fk_student_id INT,
  fk_course_id INT
);