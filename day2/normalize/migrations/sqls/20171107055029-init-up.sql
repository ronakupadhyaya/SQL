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
