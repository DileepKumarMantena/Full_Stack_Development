-- SQL Data Manipulation Language (DML) Examples

-- 1. SELECT
-- Retrieve first names, last names, and emails of employees in the Sales department
SELECT first_name, last_name, employee_id
FROM employees
WHERE employee_id = 2;

-- 2. INSERT
-- Add a new employee to the employees table
INSERT INTO employees (employee_id,first_name, last_name, birth_date)
VALUES (3,'John', 'Doe', '2000-07-28');

-- 3. UPDATE
-- Update the department of an employee with employee_id 102
UPDATE employees
SET first_name = 'Dileep', last_name = "Kumar"
WHERE employee_id = 3;

-- Use DataBase
use test_database;

-- 4. DELETE
-- Remove employees with the last name 'Smith'
DELETE FROM employees
WHERE last_name = 'Kumar';

-- 5. SELECT with JOIN
-- Retrieve the first name, last name, and department name of active employees
SELECT o.order_id, o.amount, c.first_name
FROM orders o
JOIN customers c ON c.customer_id = o.order_id
WHERE c.country = 'USA';
