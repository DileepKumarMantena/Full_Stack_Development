-- SQL Version
SELECT VERSION();

-- Use the database
USE test_database;

-- Example 1: Categorizing Customers by Age Group
SELECT customer_id,
       first_name,
       last_name,
       age,
       country,
       CASE
           WHEN age < 25 THEN 'Youth'
           WHEN age BETWEEN 25 AND 35 THEN 'Young Adult'
           ELSE 'Adult'
       END as age_group
FROM Customers;

-- Example 2: Marking Order Status Based on Shipping Status
SELECT o.order_id,
       o.item,
       o.amount,
       o.customer_id,
       s.status as shipping_status,
       CASE
           WHEN s.status = 'Pending' THEN 'Not Delivered'
           WHEN s.status = 'Delivered' THEN 'Delivered'
           ELSE 'Unknown Status'
       END as order_status
FROM Orders o
LEFT JOIN Shippings s ON o.customer_id = s.customer_id;

-- Example 3: Adding a New Column to Indicate if a Customer is from the USA
SELECT customer_id,
       first_name,
       last_name,
       age,
       country,
       CASE
           WHEN country = 'USA' THEN 'Yes'
           ELSE 'No'
       END as is_usa
FROM Customers;

-- Example 4: Displaying Order Amount Categories
SELECT order_id,
       item,
       amount,
       customer_id,
       CASE
           WHEN amount < 500 THEN 'Low'
           WHEN amount BETWEEN 500 AND 10000 THEN 'Medium'
           ELSE 'High'
       END as amount_category
FROM Orders;

-- Example 5: Combining Multiple Tables with Conditional Logic
SELECT c.customer_id,
       c.first_name,
       c.last_name,
       o.item,
       o.amount,
       COALESCE(s.status, 'No Shipping Info') as shipping_status,
       CASE
           WHEN s.status = 'Pending' THEN 'Awaiting Delivery'
           WHEN s.status = 'Delivered' THEN 'Completed'
           ELSE 'Unknown'
       END as order_status
FROM Customers c
LEFT JOIN Orders o ON c.customer_id = o.customer_id
LEFT JOIN Shippings s ON o.customer_id = s.customer_id;
