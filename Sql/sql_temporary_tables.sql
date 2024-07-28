-- Use the database
USE test_database;

-- Example 1: Creating and Using a Local Temporary Table
-- Create Local Temporary Table
CREATE TEMPORARY TABLE TempCustomers (
    customer_id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT,
    country VARCHAR(50)
);

-- Insert Data into Temporary Table
INSERT INTO TempCustomers (customer_id, first_name, last_name, age, country)
SELECT customer_id, first_name, last_name, age, country
FROM Customers
WHERE country = 'USA';

-- Select Data from Temporary Table
SELECT * FROM TempCustomers;

-- Example 2: Using Temporary Table for Aggregated Results
-- Create Temporary Table for Aggregated Results
CREATE TEMPORARY TABLE CustomerSpending (
    customer_id INT,
    total_amount_spent DECIMAL(10, 2)
);

-- Insert Aggregated Data into Temporary Table
INSERT INTO CustomerSpending (customer_id, total_amount_spent)
SELECT customer_id, SUM(amount)
FROM Orders
GROUP BY customer_id;

-- Select Data from Temporary Table
SELECT * FROM CustomerSpending;

-- Example 3: Temporary Table for Joining Multiple Tables
-- Create Temporary Table for Join Results
CREATE TEMPORARY TABLE OrderDetails (
    order_id INT,
    item VARCHAR(50),
    amount DECIMAL(10, 2),
    customer_id INT,
    customer_name VARCHAR(100)
);

-- Insert Join Results into Temporary Table
INSERT INTO OrderDetails (order_id, item, amount, customer_id, customer_name)
SELECT O.order_id, O.item, O.amount, C.customer_id, CONCAT(C.first_name, ' ', C.last_name)
FROM Orders O
JOIN Customers C ON O.customer_id = C.customer_id;

-- Select Data from Temporary Table
SELECT * FROM OrderDetails;

-- Example 4: Using Temporary Table with a Subquery
-- Create Temporary Table for Subquery Results
CREATE TEMPORARY TABLE SubqueryResults (
    customer_id INT,
    total_orders INT
);

-- Insert Subquery Results into Temporary Table
INSERT INTO SubqueryResults (customer_id, total_orders)
SELECT customer_id, COUNT(*)
FROM Orders
GROUP BY customer_id;

-- Use Temporary Table in Main Query
SELECT C.customer_id, C.first_name, C.last_name, S.total_orders
FROM Customers C
JOIN SubqueryResults S ON C.customer_id = S.customer_id;

-- Example 5: Global Temporary Table
-- Create Global Temporary Table
CREATE TEMPORARY TABLE GlobalTempTable (
    customer_id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    country VARCHAR(50)
);

-- Insert Data into Global Temporary Table
INSERT INTO GlobalTempTable (customer_id, first_name, last_name, country)
SELECT customer_id, first_name, last_name, country
FROM Customers;

-- Any session can now query the global temporary table
SELECT * FROM GlobalTempTable;

-- Global Temporary Table is dropped when the session that created it ends
-- and all other sessions referencing it are done
