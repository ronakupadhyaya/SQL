ALTER TABLE professors
    DROP COLUMN email,
    ADD email_id INT,
    ADD course_id INT;

CREATE TABLE professor_emails (
    id SERIAL PRIMARY KEY,
    email TEXT
);

DROP TABLE students_courses;

ALTER TABLE students
    ADD courses TEXT;

ALTER TABLE courses
    ADD students TEXT,
    DROP COLUMN professor;