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

CREATE TABLE students_courses (
  student_id INT,
  course_id INT
);
