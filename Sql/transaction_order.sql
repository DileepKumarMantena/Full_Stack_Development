DELIMITER $$

CREATE PROCEDURE PlaceOrder(IN itemID INT, IN quantity INT, IN customerID INT, IN orderAmount DECIMAL(10, 2))
BEGIN
    DECLARE inventoryQuantity INT;

    -- Start a transaction
    START TRANSACTION;

    -- Get the current inventory quantity
    SELECT quantity INTO inventoryQuantity
    FROM Inventory
    WHERE item_id = itemID;

    -- Check if sufficient inventory is available
    IF inventoryQuantity >= quantity THEN
        -- Insert the order
        INSERT INTO Orders (item, amount, customer_id)
        VALUES (itemID, orderAmount, customerID);

        -- Update the inventory
        UPDATE Inventory
        SET quantity = quantity - quantity
        WHERE item_id = itemID;

        -- Commit the transaction
        COMMIT;
    ELSE
        -- Rollback the transaction if inventory is insufficient
        ROLLBACK;
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient inventory';
    END IF;
END $$

DELIMITER ;
