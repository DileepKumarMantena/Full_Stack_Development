-- SQL Version
SELECT VERSION();

-- Use the database
USE test_database;

-- Example 1: Replacing NULL in a Select Query
SELECT customer_id, 
       first_name, 
       last_name, 
       IFNULL(age, 0) AS age, 
       country
FROM Customers;

-- Example 2: Using ISNULL in a Join Query
SELECT o.order_id, 
       o.item, 
       o.amount, 
       IFNULL(s.status, 'Not Shipped') AS shipping_status
FROM Orders o
LEFT JOIN Shippings s
ON o.customer_id = s.customer_id;

-- Example 3: Handling NULL Values in Aggregations
SELECT c.customer_id, 
       c.first_name, 
       c.last_name, 
       IFNULL(SUM(o.amount), 'No Orders') AS total_amount
FROM Customers c
LEFT JOIN Orders o
ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name;

-- Example 4: Customers with Their Orders and Shipping Status
SELECT c.customer_id, 
       c.first_name, 
       c.last_name, 
       o.item, 
       o.amount, 
       IFNULL(s.status, 'Not Shipped') AS shipping_status
FROM Customers c
LEFT JOIN Orders o
ON c.customer_id = o.customer_id
LEFT JOIN Shippings s
ON o.customer_id = s.customer_id;

-- Example 5: Customers with Default Age
SELECT customer_id, 
       first_name, 
       last_name, 
       IFNULL(age, 0) AS age, 
       country
FROM Customers;

-- Example 6: Shipping Status with Default Value
SELECT shipping_id, 
       status, 
       IFNULL(customer_id, 0) AS customer_id
FROM Shippings;
