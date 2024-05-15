const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Dileep@9505816053',
  database: 'FagMug_Assignment_Database'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// CREATE operation
function createUser(name, email) {
  const insertQuery = 'INSERT INTO users (name, email) VALUES (?, ?)';
  connection.query(insertQuery, [name, email], (err, results) => {
    if (err) {
      console.error('Error creating user:', err);
      return;
    }
    console.log('User created successfully');
  });
}

// READ operation
function getUsers() {
  const selectQuery = 'SELECT * FROM users';
  connection.query(selectQuery, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return;
    }
    console.log('Users:', results);
  });
}

// UPDATE operation
function updateUser(id, newName) {
  const updateQuery = 'UPDATE users SET name = ? WHERE id = ?';
  connection.query(updateQuery, [newName, id], (err, results) => {
    if (err) {
      console.error('Error updating user:', err);
      return;
    }
    console.log('User updated successfully');
  });
}

// DELETE operation
function deleteUser(id) {
  const deleteQuery = 'DELETE FROM users WHERE id = ?';
  connection.query(deleteQuery, [id], (err, results) => {
    if (err) {
      console.error('Error deleting user:', err);
      return;
    }
    console.log('User deleted successfully');
  });
}

// Example usage:
createUser('John Doe', 'john@example.com');
getUsers();
updateUser(1, 'Jane Doe');
deleteUser(1);

// Close the connection when done
connection.end();
