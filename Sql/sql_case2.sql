-- SQL Version
SELECT VERSION();

-- Use the database
USE test_database;

-- Example 11: Comprehensive Customer Order Report
SELECT c.customer_id,
       c.first_name,
       c.last_name,
       c.age,
       c.country,
       o.order_id,
       o.item,
       o.amount,
       s.status as shipping_status,
       CASE
           WHEN o.amount < 500 THEN 'Low'
           WHEN o.amount BETWEEN 500 AND 10000 THEN 'Medium'
           ELSE 'High'
       END as amount_category,
       CASE
           WHEN s.status = 'Pending' THEN 'Your order is being processed'
           WHEN s.status = 'Delivered' THEN 'Your order has been delivered'
           ELSE 'Shipping status unknown'
       END as shipping_message,
       CASE
           WHEN c.country = 'USA' THEN 'Domestic Customer'
           ELSE 'International Customer'
       END as customer_type
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
LEFT JOIN Shippings s ON o.customer_id = s.customer_id
ORDER BY c.customer_id, o.order_id;
