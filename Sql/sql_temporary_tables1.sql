-- Use the database
USE test_database;

-- Create Temporary Table for Transformed Data
CREATE TEMPORARY TABLE TransformedOrders (
    order_id INT,
    item VARCHAR(50),
    amount DECIMAL(10, 2),
    customer_id INT,
    total_amount_spent DECIMAL(10, 2)
);

-- Insert Transformed Data into Temporary Table
INSERT INTO TransformedOrders (order_id, item, amount, customer_id, total_amount_spent)
SELECT O.order_id, O.item, O.amount, O.customer_id, S.total_amount_spent
FROM Orders O
JOIN (
    SELECT customer_id, SUM(amount) AS total_amount_spent
    FROM Orders
    GROUP BY customer_id
) S ON O.customer_id = S.customer_id;

-- Select Data from Temporary Table
SELECT * FROM TransformedOrders;

-- Create Temporary Table for Conditional Aggregation
CREATE TEMPORARY TABLE HighValueCustomers (
    customer_id INT,
    total_high_value_orders INT
);

-- Insert Data into Temporary Table
INSERT INTO HighValueCustomers (customer_id, total_high_value_orders)
SELECT customer_id, COUNT(*)
FROM Orders
WHERE amount > 1000
GROUP BY customer_id;

-- Select Data from Temporary Table
SELECT C.customer_id, C.first_name, C.last_name, H.total_high_value_orders
FROM Customers C
LEFT JOIN HighValueCustomers H ON C.customer_id = H.customer_id;

