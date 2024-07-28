-- Use the database
USE test_database;

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
