-- SQL Data Manipulation Language (DML) Examples

-- Use Database
USE test_database;

-- 1. SELECT with Subquery
-- Retrieve employees who have placed orders with an amount greater than the average order amount
SELECT e.first_name, e.last_name, o.amount
FROM employees e
JOIN orders o ON e.employee_id = o.customer_id
WHERE o.amount > (SELECT AVG(amount) FROM orders);

-- 2. INSERT with SELECT
-- Insert data into a new table high_value_orders for orders with an amount greater than 1000
CREATE TABLE IF NOT EXISTS high_value_orders (
    order_id INT PRIMARY KEY,
    item VARCHAR(50),
    amount DECIMAL(10, 2),
    customer_id INT
);

INSERT INTO high_value_orders (order_id, item, amount, customer_id)
SELECT order_id, item, amount, customer_id
FROM orders
WHERE amount > 1000;

-- 3. UPDATE with JOIN
-- Update the status of shipments to 'Shipped' for customers who have placed orders with a total amount greater than 500
UPDATE shippings s
JOIN (
    SELECT customer_id, SUM(amount) as total_amount
    FROM orders
    GROUP BY customer_id
    HAVING total_amount > 500
) o ON s.customer_id = o.customer_id
SET s.status = 'Shipped';

-- 4. DELETE with Subquery
-- Delete employees who have not placed any orders
DELETE FROM employees
WHERE employee_id NOT IN (SELECT DISTINCT customer_id FROM orders);

-- 5. SELECT with Multiple JOINS and Aggregate Functions
-- Retrieve the total order amount for each customer, along with their first name, last name, and country, for customers who have placed orders
SELECT c.customer_id, c.first_name, c.last_name, c.country, SUM(o.amount) as total_order_amount
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name, c.country
HAVING SUM(o.amount) > 0;

-- 6. SELECT with EXISTS
-- Retrieve customers who have orders with an amount greater than 500
SELECT c.customer_id, c.first_name, c.last_name, c.country
FROM customers c
WHERE EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.customer_id AND o.amount > 500
);

-- 7. UPDATE with Subquery
-- Update the country of employees to 'Unknown' who do not have any orders
UPDATE employees
SET last_name = 'Smith'
WHERE employee_id NOT IN (SELECT DISTINCT customer_id FROM orders);

-- 8. DELETE with JOIN
-- Delete all orders for customers from 'UK'
DELETE o
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
WHERE c.country = 'UK';

-- 9. SELECT with Complex Conditions
-- Retrieve customers who have placed more than one order, and the total amount of their orders exceeds 1000
SELECT c.customer_id, c.first_name, c.last_name, COUNT(o.order_id) as order_count, SUM(o.amount) as total_amount
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name
HAVING COUNT(o.order_id) > 1 AND SUM(o.amount) > 1000;

-- 10. INSERT with Data Transformation
-- Insert customer details into a new table customer_summary with an additional column for the number of orders placed
CREATE TABLE IF NOT EXISTS customer_summary (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT,
    country VARCHAR(50),
    order_count INT
);

INSERT INTO customer_summary (customer_id, first_name, last_name, age, country, order_count)
SELECT c.customer_id, c.first_name, c.last_name, c.age, c.country, COUNT(o.order_id) as order_count
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name, c.age, c.country;
