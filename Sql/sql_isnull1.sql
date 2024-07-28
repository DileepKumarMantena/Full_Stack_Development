-- SQL Version
SELECT VERSION();

-- Use the database
USE test_database;

-- Example 1: Checking for NULL Values in a Single Table
SELECT order_id, item, amount, IFNULL(customer_id, 'Unknown') AS customer_id
FROM Orders;

-- Example 2: Using IFNULL with Joins Across Multiple Tables
SELECT 
    O.order_id,
    O.item,
    O.amount,
    IFNULL(C.first_name, 'Unknown') AS first_name,
    IFNULL(C.last_name, 'Unknown') AS last_name,
    IFNULL(C.age, 0) AS age,
    IFNULL(C.country, 'Unknown') AS country
FROM Orders O
LEFT JOIN Customers C ON O.customer_id = C.customer_id;

-- Example 3: Handling NULL Values in Aggregated Results
SELECT 
    C.customer_id,
    IFNULL(C.first_name, 'Unknown') AS first_name,
    IFNULL(C.last_name, 'Unknown') AS last_name,
    IFNULL(SUM(O.amount), 0) AS total_amount_spent
FROM Customers C
LEFT JOIN Orders O ON C.customer_id = O.customer_id
GROUP BY C.customer_id, C.first_name, C.last_name;

-- Example 4: Display Shipping Status with Default Value
SELECT 
    C.customer_id,
    C.first_name,
    C.last_name,
    IFNULL(S.status, 'No Shipping Info') AS shipping_status
FROM Customers C
LEFT JOIN Shippings S ON C.customer_id = S.customer_id
ORDER BY C.customer_id, S.shipping_id DESC;