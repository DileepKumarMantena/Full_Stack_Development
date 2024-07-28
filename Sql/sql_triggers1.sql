-- Use the database
USE test_database;

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
