
START TRANSACTION;

INSERT INTO wallet_topup_and_deduct_system.transaction_table (id, user_id, amount, transaction_id, timestamp) VALUES (14, 2, 500, 1, '2024-07-03');

UPDATE wallet_topup_and_deduct_system.transaction_table SET amount = 800 WHERE id = 14;

COMMIT; 
ROLLBACK;



