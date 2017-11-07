-- Professor should have own email

ALTER TABLE professors
    ADD COLUMN email TEXT,
    DROP COLUMN email_id,
    DROP COLUMN course_id;

DROP TABLE professor_emails;

CREATE TABLE students_courses(
    fk_students INT,
    fk_courses  INT
);

ALTER TABLE students
    DROP COLUMN courses;

ALTER TABLE courses
    ADD professor INT,
    DROP COLUMN students;