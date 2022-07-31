CREATE TABLE Student (
    StudentID int,
    LastName varchar(255),
    FirstName varchar(255),
    Grade varchar(255),
    Subject varchar(255)
);

CREATE TABLE  (
    StudentID int,
    LastName varchar(255),
    FirstName varchar(255),
    Grade varchar(255),
    Subjects varchar(255)
);

CREATE TABLE Subject (
    SubjectID int,
    Name varchar(255),
    Teacher varchar(255),
    Num_Students int,
    
);

SELECT Subjects
FROM SubjectName
WHERE Student BETWEEN value1 AND value2;

CREATE TABLE Teacher (
    TeacherID int,
    Name varchar(255),
    LastName varchar(255),
    FirstName varchar(255),
    Subjects varchar(255),

);

SELECT Name
FROM Teacher
INNER JOIN Student
ON ); Teacher.ID = Student.ID;