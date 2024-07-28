-- Use Database
USE wallet_topup_and_deduct_system;

-- Create Customers Table
CREATE TABLE Customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT,
    country VARCHAR(50)
);

-- Insert Data into Customers Table
INSERT INTO Customers (customer_id, first_name, last_name, age, country) VALUES
(1, 'John', 'Doe', 31, 'USA'),
(2, 'Robert', 'Luna', 22, 'USA'),
(3, 'David', 'Robinson', 22, 'UK'),
(4, 'John', 'Reinhardt', 25, 'UK'),
(5, 'Betty', 'Doe', 28, 'UAE');

-- Create Orders Table
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    item VARCHAR(100),
    amount INT,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

-- Insert Data into Orders Table
INSERT INTO Orders (order_id, item, amount, customer_id) VALUES
(1, 'Keyboard', 400, 4),
(2, 'Mouse', 300, 4),
(3, 'Monitor', 12000, 3),
(4, 'Keyboard', 400, 1),
(5, 'Mousepad', 250, 2);

-- Create Shippings Table
CREATE TABLE Shippings (
    shipping_id INT PRIMARY KEY,
    status VARCHAR(50),
    customer INT,
    FOREIGN KEY (customer) REFERENCES Customers(customer_id)
);

-- Insert Data into Shippings Table
INSERT INTO Shippings (shipping_id, status, customer) VALUES
(1, 'Pending', 2),
(2, 'Pending', 4),
(3, 'Delivered', 3),
(4, 'Pending', 5),
(5, 'Delivered', 1);

-- Create OrderLogs Table
CREATE TABLE OrderLogs (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    action VARCHAR(50),
    old_item VARCHAR(100),
    new_item VARCHAR(100),
    old_amount INT,
    new_amount INT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Trigger for INSERT Operation on Orders
DELIMITER //
CREATE TRIGGER after_order_insert
AFTER INSERT ON Orders
FOR EACH ROW
BEGIN
    INSERT INTO OrderLogs (order_id, action, new_item, new_amount)
    VALUES (NEW.order_id, 'INSERT', NEW.item, NEW.amount);
END;
//
DELIMITER ;

-- Create Trigger for UPDATE Operation on Orders
DELIMITER //
CREATE TRIGGER after_order_update
AFTER UPDATE ON Orders
FOR EACH ROW
BEGIN
    INSERT INTO OrderLogs (order_id, action, old_item, new_item, old_amount, new_amount)
    VALUES (OLD.order_id, 'UPDATE', OLD.item, NEW.item, OLD.amount, NEW.amount);
END;
//
DELIMITER ;

-- Create Trigger for DELETE Operation on Orders
DELIMITER //
CREATE TRIGGER after_order_delete
AFTER DELETE ON Orders
FOR EACH ROW
BEGIN
    INSERT INTO OrderLogs (order_id, action, old_item, old_amount)
    VALUES (OLD.order_id, 'DELETE', OLD.item, OLD.amount);
END;
//
DELIMITER ;

-- Create AuditLogs Table
CREATE TABLE AuditLogs (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    action VARCHAR(50),
    old_first_name VARCHAR(50),
    new_first_name VARCHAR(50),
    old_last_name VARCHAR(50),
    new_last_name VARCHAR(50),
    old_age INT,
    new_age INT,
    old_country VARCHAR(50),
    new_country VARCHAR(50),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Trigger for INSERT Operation on Customers
DELIMITER //
CREATE TRIGGER after_customer_insert
AFTER INSERT ON Customers
FOR EACH ROW
BEGIN
    INSERT INTO AuditLogs (customer_id, action, new_first_name, new_last_name, new_age, new_country)
    VALUES (NEW.customer_id, 'INSERT', NEW.first_name, NEW.last_name, NEW.age, NEW.country);
END;
//
DELIMITER ;

-- Create Trigger for UPDATE Operation on Customers
DELIMITER //
CREATE TRIGGER after_customer_update
AFTER UPDATE ON Customers
FOR EACH ROW
BEGIN
    INSERT INTO AuditLogs (customer_id, action, old_first_name, new_first_name, old_last_name, new_last_name, old_age, new_age, old_country, new_country)
    VALUES (OLD.customer_id, 'UPDATE', OLD.first_name, NEW.first_name, OLD.last_name, NEW.last_name, OLD.age, NEW.age, OLD.country, NEW.country);
END;
//
DELIMITER ;

-- Create Trigger for DELETE Operation on Customers
DELIMITER //
CREATE TRIGGER after_customer_delete
AFTER DELETE ON Customers
FOR EACH ROW
BEGIN
    INSERT INTO AuditLogs (customer_id, action, old_first_name, old_last_name, old_age, old_country)
    VALUES (OLD.customer_id, 'DELETE', OLD.first_name, OLD.last_name, OLD.age, OLD.country);
END;
//
DELIMITER ;

-- Create Products Table
CREATE TABLE Products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    stock INT
);

-- Insert Data into Products Table
INSERT INTO Products (product_id, product_name, stock) VALUES
(1, 'Laptop', 50),
(2, 'Mouse', 150),
(3, 'Keyboard', 100);

-- Create Sales Table
CREATE TABLE Sales (
    sale_id INT PRIMARY KEY,
    product_id INT,
    quantity INT,
    sale_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

-- Create Trigger for INSERT Operation on Sales
DELIMITER //
CREATE TRIGGER after_sale_insert
AFTER INSERT ON Sales
FOR EACH ROW
BEGIN
    UPDATE Products
    SET stock = stock - NEW.quantity
    WHERE product_id = NEW.product_id;
END;
//
DELIMITER ;

-- Create Trigger for DELETE Operation on Sales (In case of Sale Deletion)
DELIMITER //
CREATE TRIGGER after_sale_delete
AFTER DELETE ON Sales
FOR EACH ROW
BEGIN
    UPDATE Products
    SET stock = stock + OLD.quantity
    WHERE product_id = OLD.product_id;
END;
//
DELIMITER ;

-- Create Trigger for UPDATE Operation on Sales (In case of Sale Update)
DELIMITER //
CREATE TRIGGER after_sale_update
AFTER UPDATE ON Sales
FOR EACH ROW
BEGIN
    UPDATE Products
    SET stock = stock + OLD.quantity - NEW.quantity
    WHERE product_id = NEW.product_id;
END;
//
DELIMITER ;

-- Create ProductLogs Table
CREATE TABLE ProductLogs (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    action VARCHAR(50),
    old_product_name VARCHAR(100),
    new_product_name VARCHAR(100),
    old_stock INT,
    new_stock INT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Trigger for INSERT Operation on Products
DELIMITER //
CREATE TRIGGER after_product_insert
AFTER INSERT ON Products
FOR EACH ROW
BEGIN
    INSERT INTO ProductLogs (product_id, action, new_product_name, new_stock)
    VALUES (NEW.product_id, 'INSERT', NEW.product_name, NEW.stock);
END;
//
DELIMITER ;

-- Create Trigger for UPDATE Operation on Products
DELIMITER //
CREATE TRIGGER after_product_update
AFTER UPDATE ON Products
FOR EACH ROW
BEGIN
    INSERT INTO ProductLogs (product_id, action, old_product_name, new_product_name, old_stock, new_stock)
    VALUES (OLD.product_id, 'UPDATE', OLD.product_name, NEW.product_name, OLD.stock, NEW.stock);
END;
//
DELIMITER ;

-- Create Trigger for DELETE Operation on Products
DELIMITER //
CREATE TRIGGER after_product_delete
AFTER DELETE ON Products
FOR EACH ROW
BEGIN
    INSERT INTO ProductLogs (product_id, action, old_product_name, old_stock)
    VALUES (OLD.product_id, 'DELETE', OLD.product_name, OLD.stock);
END;
//
DELIMITER ;

-- Create Employees Table
CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    birth_date DATE
);

-- Insert Data into Employees Table
INSERT INTO Employees (employee_id, first_name, last_name, birth_date) VALUES
(1, 'Alice', 'Smith', '2000-05-15'),
(2, 'Bob', 'Johnson', '1995-11-30');

-- Create Trigger for INSERT Operation on Employees
DELIMITER //
CREATE TRIGGER before_employee_insert
BEFORE INSERT ON Employees
FOR EACH ROW
BEGIN
    IF (TIMESTAMPDIFF(YEAR, NEW.birth_date, CURDATE()) < 18) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Employee must be at least 18 years old.';
    END IF;
END;
//
DELIMITER ;

-- Create Trigger for UPDATE Operation on Employees
DELIMITER //
CREATE TRIGGER before_employee_update
BEFORE UPDATE ON Employees
FOR EACH ROW
BEGIN
    IF (TIMESTAMPDIFF(YEAR, NEW.birth_date, CURDATE()) < 18) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Employee must be at least 18 years old.';
    END IF;
END;
//
DELIMITER ;

-- Verification Queries

-- Verify OrderLogs
-- Insert an Order
INSERT INTO Orders (order_id, item, amount, customer_id) VALUES (6, 'Tablet', 2000, 2);

-- Update an Order
UPDATE Orders SET amount = 2200 WHERE order_id = 6;

-- Delete an Order
DELETE FROM Orders WHERE order_id = 6;

-- Check the OrderLogs
SELECT * FROM OrderLogs;

-- Verify AuditLogs
-- Insert a Customer
INSERT INTO Customers (customer_id, first_name, last_name, age, country) VALUES (6, 'Jane', 'Doe', 30, 'USA');

-- Update a Customer
UPDATE Customers SET age = 31 WHERE customer_id = 6;

-- Delete a Customer
DELETE FROM Customers WHERE customer_id = 6;

-- Check the AuditLogs
SELECT * FROM AuditLogs;

-- Verify ProductLogs
-- Insert a Product
INSERT INTO Products (product_id, product_name, stock) VALUES (4, 'Monitor', 30);

-- Update a Product
UPDATE Products SET stock = 35 WHERE product_id = 4;

-- Delete a Product
DELETE FROM Products WHERE product_id = 4;

-- Check the ProductLogs
SELECT * FROM ProductLogs;

-- Verify Stock Levels in Products Table
-- Insert a Sale
INSERT INTO Sales (sale_id, product_id, quantity) VALUES (1, 1, 5);

-- Check the Product Stock
SELECT * FROM Products WHERE product_id = 1;

-- Delete a Sale
DELETE FROM Sales WHERE sale_id = 1;

-- Check the Product Stock
SELECT * FROM Products WHERE product_id = 1;

-- Verify Age Rule in Employees Table
-- Insert an Employee with Age Below 18
-- (This should produce an error and not insert the record)
INSERT INTO Employees (employee_id, first_name, last_name, birth_date) VALUES (3, 'Tom', 'Sawyer', '2010-04-20');

-- Update an Employee to Age Below 18
-- (This should produce an error and not update the record)
UPDATE Employees SET birth_date = '2010-04-20' WHERE employee_id = 2;

-- Check the Employees Table
SELECT * FROM Employees;
