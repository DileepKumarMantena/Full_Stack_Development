-- SQL Version
SELECT VERSION();

-- Use the database
USE test_database;

-- Creating the Customers table
CREATE TABLE IF NOT EXISTS Customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT,
    country VARCHAR(50)
);

-- Inserting data into the Customers table
INSERT INTO Customers (customer_id, first_name, last_name, age, country)
VALUES
(1, 'John', 'Doe', 31, 'USA'),
(2, 'Robert', 'Luna', 22, 'USA'),
(3, 'David', 'Robinson', 22, 'UK'),
(4, 'John', 'Reinhardt', 25, 'UK'),
(5, 'Betty', 'Doe', 28, 'UAE')
ON DUPLICATE KEY UPDATE
first_name=VALUES(first_name),
last_name=VALUES(last_name),
age=VALUES(age),
country=VALUES(country);

-- Creating the Orders table
CREATE TABLE IF NOT EXISTS Orders (
    order_id INT PRIMARY KEY,
    item VARCHAR(50),
    amount INT,
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

-- Inserting data into the Orders table
INSERT INTO Orders (order_id, item, amount, customer_id, order_date)
VALUES
(1, 'Keyboard', 400, 4, '2023-06-15'),
(2, 'Mouse', 300, 4, '2023-06-20'),
(3, 'Monitor', 12000, 3, '2023-06-25'),
(4, 'Keyboard', 400, 1, '2023-07-01'),
(5, 'Mousepad', 250, 2, '2023-07-10')
ON DUPLICATE KEY UPDATE
item=VALUES(item),
amount=VALUES(amount),
customer_id=VALUES(customer_id),
order_date=VALUES(order_date);

-- Creating the Items table
CREATE TABLE IF NOT EXISTS Items (
    item_id INT PRIMARY KEY,
    item VARCHAR(50),
    amount INT,
    category_id INT
);

-- Inserting data into the Items table
INSERT INTO Items (item_id, item, amount, category_id)
VALUES
(1, 'Item A', 500, 1),
(2, 'Item B', 1500, 1),
(3, 'Item C', 300, 2),
(4, 'Item D', 1200, 2),
(5, 'Item E', 2000, 3),
(6, 'Item F', 1700, 3)
ON DUPLICATE KEY UPDATE
item=VALUES(item),
amount=VALUES(amount),
category_id=VALUES(category_id);

-- Example 1: Using ROW_NUMBER()
-- Calculate row number within each customer's orders, ordered by amount descending
SELECT 
    order_id, 
    item, 
    amount, 
    customer_id,
    ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY amount DESC) AS row_num
FROM Orders;

-- Example 2: Using RANK()
-- Calculate rank within each customer's orders, ordered by amount descending
SELECT 
    order_id, 
    item, 
    amount, 
    customer_id,
    RANK() OVER (PARTITION BY customer_id ORDER BY amount DESC) AS `rank`
FROM Orders;




-- Example 5: Ranking Based on Different Criteria
-- Calculate rank of customers based on total amount spent
SELECT 
    customer_id,
    SUM(amount) AS total_amount,
    RANK() OVER (ORDER BY SUM(amount) DESC) AS customer_rank
FROM Orders
GROUP BY customer_id;

-- Example 6: Top N Items per Category Using ROW_NUMBER()
-- Get top 3 items (highest amount) per category
SELECT 
    category_id,
    item,
    amount,
    row_num
FROM (
    SELECT 
        category_id,
        item,
        amount,
        ROW_NUMBER() OVER (PARTITION BY category_id ORDER BY amount DESC) AS row_num
    FROM Items
) subquery
WHERE row_num <= 3;
