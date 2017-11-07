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
  fk_professors INT
);

CREATE TABLE students_courses (
  id SERIAL PRIMARY KEY,
  fk_students INT NOT NULL,
  fk_courses INT NOT NULL
);
