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

-- Example 5: Listing Customers and Their Last Order Item
SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    COALESCE(o.item, 'No Orders') AS last_order_item
FROM 
    Customers c
LEFT JOIN 
    Orders o ON c.customer_id = o.customer_id
ORDER BY 
    c.customer_id, o.order_id DESC;

-- Example 6: Counting Orders per Customer with Default Value
SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    COALESCE(COUNT(o.order_id), 0) AS order_count
FROM 
    Customers c
LEFT JOIN 
    Orders o ON c.customer_id = o.customer_id
GROUP BY 
    c.customer_id, c.first_name, c.last_name;

-- Example 7: Customers and Their Shipping Statuses
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
    c.customer_id;

-- Example 8: Total Amount Spent per Country
SELECT 
    c.country,
    COALESCE(SUM(o.amount), 0) AS total_amount_spent
FROM 
    Customers c
LEFT JOIN 
    Orders o ON c.customer_id = o.customer_id
GROUP BY 
    c.country;

-- Example 9: Customers with Pending Orders
SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    COALESCE(s.status, 'No Pending Orders') AS shipping_status
FROM 
    Customers c
LEFT JOIN 
    Shippings s ON c.customer_id = s.customer_id AND s.status = 'Pending'
ORDER BY 
    c.customer_id;

-- Example 10: Customer Orders and Shipping Status
SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    o.order_id,
    o.item,
    o.amount,
    COALESCE(s.status, 'Not Shipped') AS shipping_status
FROM 
    Customers c
LEFT JOIN 
    Orders o ON c.customer_id = o.customer_id
LEFT JOIN 
    Shippings s ON c.customer_id = s.customer_id
ORDER BY 
    c.customer_id, o.order_id, s.shipping_id;
