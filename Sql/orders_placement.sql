START TRANSACTION;

-- Insert new order
INSERT INTO wallet_topup_and_deduct_system.transaction_table (id, user_id, amount, transaction_id, timestamp) VALUES (15, 2, 500, 1, '2024-07-03');



-- -- Update inventory
UPDATE wallet_topup_and_deduct_system.transaction_table 
SET timestamp =  "2024-07-27"
WHERE id = 15;

