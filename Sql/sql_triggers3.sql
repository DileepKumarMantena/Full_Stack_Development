-- Use the database
USE test_database;

-- Create Employees Table
CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    birth_date DATE
);

-- Insert Data into Employees Table
INSERT INTO Employees (employee_id, first_name, last_name, birth_date) VALUES
(1, 'Alice', 'Smith', '2000-05-15'),
(2, 'Bob', 'Johnson', '1995-11-30');

-- Create Trigger for INSERT Operation on Employees
DELIMITER //
CREATE TRIGGER before_employee_insert
BEFORE INSERT ON Employees
FOR EACH ROW
BEGIN
    IF (TIMESTAMPDIFF(YEAR, NEW.birth_date, CURDATE()) < 18) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Employee must be at least 18 years old.';
    END IF;
END;
//
DELIMITER ;

-- Create Trigger for UPDATE Operation on Employees
DELIMITER //
CREATE TRIGGER before_employee_update
BEFORE UPDATE ON Employees
FOR EACH ROW
BEGIN
    IF (TIMESTAMPDIFF(YEAR, NEW.birth_date, CURDATE()) < 18) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Employee must be at least 18 years old.';
    END IF;
END;
//
DELIMITER ;
