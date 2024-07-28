-- Use the database
USE test_database;

-- Example of ROW_NUMBER window function
SELECT 
    order_id, 
    item, 
    amount, 
    customer_id,
    ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY amount DESC) AS row_num
FROM Orders;

-- Example of RANK window function
SELECT 
    order_id, 
    item, 
    amount, 
    customer_id,
    RANK() OVER (PARTITION BY customer_id ORDER BY amount DESC) AS `rank`
FROM Orders;

