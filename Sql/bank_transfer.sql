START TRANSACTION;

-- Debit from account 13
UPDATE wallet_topup_and_deduct_system.transaction_table
SET amount = amount - 100
WHERE id = 13;

-- Credit to account 14
UPDATE wallet_topup_and_deduct_system.transaction_table
SET amount = amount + 100
WHERE id = 14;

