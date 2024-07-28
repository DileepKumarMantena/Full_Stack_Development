-- SQL Version
SELECT VERSION();

-- Use the database
USE test_database;

-- Example 1: Handling NULL Values in Customer Information
SELECT 
    o.order_id,
    o.item,
    o.amount,
    COALESCE(c.first_name, 'Unknown') AS first_name,
    COALESCE(c.last_name, 'Unknown') AS last_name
FROM 
    Orders o
JOIN 
    Customers c ON o.customer_id = c.customer_id;

-- Example 2: Combining Columns with NULL Values
SELECT 
    c.customer_id,
    COALESCE(c.first_name, '') || ' ' || COALESCE(c.last_name, '') AS full_name
FROM 
    Customers c;

-- Example 3: Default Shipping Status
SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    COALESCE(s.status, 'Not Shipped') AS shipping_status
FROM 
    Customers c
LEFT JOIN 
    Shippings s ON c.customer_id = s.customer_id
ORDER BY 
    c.customer_id, s.shipping_id DESC;
    
-- Example 4: Calculating Total Amount Spent by Each Customer
SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    COALESCE(SUM(o.amount), 0) AS total_amount_spent
FROM 
    Customers c
LEFT JOIN 
    Orders o ON c.customer_id = o.customer_id
GROUP BY 
    c.customer_id, c.first_name, c.last_name;
