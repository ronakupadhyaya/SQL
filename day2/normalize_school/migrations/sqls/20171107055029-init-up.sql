CREATE TABLE professors (
  id SERIAL PRIMARY KEY,
  email_id INT,
  courses TEXT
);

CREATE TABLE professor_emails (
  id SERIAL PRIMARY KEY,
  email TEXT
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  courses TEXT
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  students TEXT
);
