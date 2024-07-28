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
