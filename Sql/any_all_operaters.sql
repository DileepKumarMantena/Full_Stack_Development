-- Use the database
USE test_database;


-- Using ANY operator
SELECT first_name, last_name
FROM test_database.Customers
WHERE customer_id = ANY (SELECT customer_id FROM Orders WHERE amount > 300);

-- Using ALL operator
SELECT first_name, last_name
FROM test_database.Customers
WHERE customer_id = ALL (SELECT customer_id FROM Orders WHERE amount > 100);
