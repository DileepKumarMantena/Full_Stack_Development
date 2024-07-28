-- SQL Data Definition Language (DDL) Examples

-- 1. Create Database
CREATE DATABASE company_db;

-- 2. Use the new database
USE company_db;

-- 3. Create Tables
-- Create Customers table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT,
    country VARCHAR(50)
);

-- Create Orders table
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    item VARCHAR(50),
    amount DECIMAL(10, 2),
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Create Shippings table
CREATE TABLE shippings (
    shipping_id INT PRIMARY KEY,
    status VARCHAR(50),
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- 4. Modify Table Structure
-- Add a new column to the customers table
ALTER TABLE customers
ADD COLUMN email VARCHAR(100);

-- Change the data type of the first_name column
ALTER TABLE customers
MODIFY COLUMN first_name VARCHAR(100);

-- Drop the email column from the customers table
ALTER TABLE customers
DROP COLUMN email;

-- 5. Delete Database Objects
-- Drop the shippings table
DROP TABLE shippings;

-- Drop the entire database
DROP DATABASE company_db;

-- 6. Truncate a Table
-- Note: Truncate operation shown for completeness, requires existing table
-- Create a temporary orders table to demonstrate TRUNCATE

-- Use Database
use company_db;

CREATE TABLE temp_orders (
    order_id INT PRIMARY KEY,
    item VARCHAR(50),
    amount DECIMAL(10, 2),
    customer_id INT
);

-- Insert some sample data
INSERT INTO temp_orders (order_id, item, amount, customer_id) VALUES
(1, 'Keyboard', 50.00, 1),
(2, 'Mouse', 20.00, 2);

-- Truncate the temp_orders table
TRUNCATE TABLE temp_orders;

-- Drop the temp_orders table after truncating
DROP TABLE temp_orders;
