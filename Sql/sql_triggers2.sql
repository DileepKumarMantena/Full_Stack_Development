-- Use the database
USE test_database;

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
