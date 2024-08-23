use notessharing;

CREATE PROCEDURE CreateDatabaseAndTable()
BEGIN
    -- Step 1: Create a database
    SET @db_name = 'notessharing';
    SET @create_db_query = CONCAT('CREATE DATABASE IF NOT EXISTS ', @db_name);
    PREPARE stmt FROM @create_db_query;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
    
    -- Step 2: Create a table in the new database
    SET @create_table_query = CONCAT('
        CREATE TABLE IF NOT EXISTS ', @db_name, '.Employees (
            EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
            FirstName VARCHAR(50),
            LastName VARCHAR(50),
            Department VARCHAR(50),
            Salary DECIMAL(10, 2)
        )');
    PREPARE stmt FROM @create_table_query;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
    
    -- Step 3: Insert values into the table
    SET @insert_query = CONCAT('
        INSERT INTO ', @db_name, '.Employees (FirstName, LastName, Department, Salary) VALUES 
        (''John'', ''Doe'', ''HR'', 50000.00),
        (''Jane'', ''Smith'', ''IT'', 60000.00),
        (''Robert'', ''Johnson'', ''Finance'', 55000.00)
    ');
    PREPARE stmt FROM @insert_query;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;

    SELECT 'Database, Table, and Records Created Successfully' AS Result;
END$$

DELIMITER ;
