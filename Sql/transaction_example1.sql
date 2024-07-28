START TRANSACTION;

-- Debit from account 1
UPDATE wallet_topup_and_deduct_system.transaction_table SET amount = 500 WHERE id = 13;
-- Credit to account 14
UPDATE wallet_topup_and_deduct_system.transaction_table SET amount = amount-2000 WHERE id = 14;
COMMIT;
ROLLBACK;


