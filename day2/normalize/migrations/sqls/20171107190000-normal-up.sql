CREATE TABLE professors (
  id SERIAL PRIMARY KEY,
  professor_name TEXT,
  email TEXT
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  student_name INT
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  course_name TEXT,
  professor_id INT
);

CREATE TABLE student_course (
  student_id INT,
  course_id INT
);
