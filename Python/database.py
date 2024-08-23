import mysql.connector
from mysql.connector import errorcode

def create_database(cursor):
    try:
        cursor.execute("CREATE DATABASE IF NOT EXISTS example_db")
    except mysql.connector.Error as err:
        print(f"Failed creating database: {err}")
        exit(1)

def create_table(cursor):
    try:
        cursor.execute("USE example_db")
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS example_table (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                age INT NOT NULL
            )
        ''')
    except mysql.connector.Error as err:
        print(f"Failed creating table: {err}")
        exit(1)

def create_stored_procedure(cursor):
    try:
        cursor.execute("USE example_db")
        cursor.execute('''
            DROP PROCEDURE IF EXISTS InsertUser;
        ''')
        cursor.execute('''
            CREATE PROCEDURE InsertUser(IN userName VARCHAR(255), IN userAge INT)
            BEGIN
                INSERT INTO users (name, age) VALUES (userName, userAge);
            END;
        ''')
    except mysql.connector.Error as err:
        print(f"Failed creating stored procedure: {err}")
        exit(1)

def main():
    try:
        # Connect to MySQL server
        conn = mysql.connector.connect(
            user='root',
            password='Dileep@9505816053',
            host='127.0.0.1'
        )
        cursor = conn.cursor()

        # Step 1: Create Database
        create_database(cursor)

        # Step 2: Create Table
        create_table(cursor)

        # Step 3: Create Stored Procedure
        create_stored_procedure(cursor)


        register_student()
        # Step 4: Insert Data Using Stored Procedure
        cursor.callproc('InsertUser', ('Bob', 25))
        cursor.callproc('InsertUser',('Alice',25))
        conn.commit()

        # Verify the insertions
        cursor.execute("SELECT * FROM users")
        rows = cursor.fetchall()
        for row in rows:
            print(row)

    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    else:
        cursor.close()
        conn.close()

if __name__ == "__main__":
    main()
