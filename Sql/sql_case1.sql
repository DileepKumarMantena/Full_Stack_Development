-- SQL Version
SELECT VERSION();

-- Use the database
USE test_database;

-- Example 6: Discount Based on Age Group
SELECT o.order_id,
       o.item,
       o.amount,
       c.customer_id,
       c.first_name,
       c.last_name,
       c.age,
       CASE
           WHEN c.age < 25 THEN o.amount * 0.9
           WHEN c.age BETWEEN 25 AND 35 THEN o.amount * 0.95
           ELSE o.amount
       END as discounted_amount
FROM Orders o
JOIN Customers c ON o.customer_id = c.customer_id;

-- Example 7: Shipping Status Summary
SELECT c.customer_id,
       c.first_name,
       c.last_name,
       SUM(CASE WHEN s.status = 'Pending' THEN 1 ELSE 0 END) as pending_orders,
       SUM(CASE WHEN s.status = 'Delivered' THEN 1 ELSE 0 END) as delivered_orders
FROM Customers c
LEFT JOIN Orders o ON c.customer_id = o.customer_id
LEFT JOIN Shippings s ON o.customer_id = s.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name;

-- Example 8: Customer Order Details with Shipping Info
SELECT c.customer_id,
       c.first_name,
       c.last_name,
       o.order_id,
       o.item,
       o.amount,
       s.status as shipping_status,
       CASE
           WHEN s.status = 'Pending' THEN 'Your order is on the way'
           WHEN s.status = 'Delivered' THEN 'Your order has been delivered'
           ELSE 'Shipping status unknown'
       END as shipping_message
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
LEFT JOIN Shippings s ON o.customer_id = s.customer_id;

-- Example 9: Highlight High-Value Customers
SELECT c.customer_id,
       c.first_name,
       c.last_name,
       SUM(o.amount) as total_order_amount,
       CASE
           WHEN SUM(o.amount) > 10000 THEN 'High-Value Customer'
           ELSE 'Regular Customer'
       END as customer_type
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name;

-- Example 10: Customer Order and Shipping Status Overview
SELECT c.customer_id,
       c.first_name,
       c.last_name,
       o.order_id,
       o.item,
       o.amount,
       s.status as shipping_status,
       CASE
           WHEN s.status = 'Pending' THEN 'Pending'
           WHEN s.status = 'Delivered' THEN 'Delivered'
           ELSE 'No Shipping Info'
       END as current_status
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
LEFT JOIN Shippings s ON o.customer_id = s.customer_id
ORDER BY c.customer_id, o.order_id;
