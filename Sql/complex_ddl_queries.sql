-- SQL Data Definition Language (DDL) Complex Examples

-- Use the database
USE company_db;

-- 1. Create a new table with composite primary key and foreign key
CREATE TABLE order_items (
    order_id INT,
    item_id INT,
    quantity INT,
    price DECIMAL(10, 2),
    PRIMARY KEY (order_id, item_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);

-- 2. Create an index on the customers table for faster searches by country
CREATE INDEX idx_country ON customers(country);

-- 3. Create a view to display customer orders with total amount spent by each customer
CREATE VIEW customer_order_summary AS
SELECT c.customer_id, c.first_name, c.last_name, c.country, SUM(o.amount) AS total_amount
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name, c.country;

-- 4. Alter table orders to add a new column and set a default value
ALTER TABLE orders
ADD COLUMN order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP;


-- 5. Create a trigger to automatically update the total amount in customer_order_summary view when an order is inserted, updated, or deleted
DELIMITER //
CREATE TRIGGER update_customer_order_summary
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
    IF EXISTS (SELECT * FROM customer_order_summary WHERE customer_id = NEW.customer_id) THEN
        UPDATE customer_order_summary
        SET total_amount = total_amount + NEW.amount
        WHERE customer_id = NEW.customer_id;
    ELSE
        INSERT INTO customer_order_summary (customer_id, first_name, last_name, country, total_amount)
        SELECT c.customer_id, c.first_name, c.last_name, c.country, NEW.amount
        FROM customers c
        WHERE c.customer_id = NEW.customer_id;
    END IF;
END;
//
DELIMITER ;

-- Note: The trigger above is for INSERT operation only. Similar triggers can be created for UPDATE and DELETE operations to ensure the view remains consistent.
