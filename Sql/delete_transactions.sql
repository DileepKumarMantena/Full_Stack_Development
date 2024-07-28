-- Insert new order
INSERT INTO wallet_topup_and_deduct_system.transaction_table (id, user_id, amount, transaction_id, timestamp) VALUES (16, 2, 500, 1, '2024-07-03');
--- DELETE EXISTING ORDER

DELETE FROM wallet_topup_and_deduct_system.transaction_table WHERE id = 16;