import React, { useState } from 'react';
// import './App.css';

function Home() {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState('');

  const handleAddStudent = () => {
    if (newStudentName.trim() !== '') {
      setStudents([...students, { id: Date.now(), name: newStudentName }]);
      setNewStudentName('');
    }
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="App">
      <h1>Student Management System</h1>
      <div>
        <input
          type="text"
          placeholder="Enter student name"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name}
            <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
