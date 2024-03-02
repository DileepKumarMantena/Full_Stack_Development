import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ViewStudents from './ViewStudents';
import onDeleteStudent from './onDeleteStudent';

function Home() {
  const history = useHistory();
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentPhoneNumber, setNewStudentPhoneNumber] = useState('');
  const [newStudentCity, setNewStudentCity] = useState('');

  const handleAddStudent = () => {
    if (newStudentName.trim() !== '' && newStudentPhoneNumber.trim() !== '' && newStudentCity.trim() !== '') {
      setStudents([...students, { 
        id: Date.now(), 
        name: newStudentName,
        phoneNumber: newStudentPhoneNumber,
        city: newStudentCity
      }]);
      setNewStudentName('');
      setNewStudentPhoneNumber('');
      setNewStudentCity('');
    }
  };

  const handleDeleteStudent = (id) => {
    onDeleteStudent(students, id, setStudents);
  };

  const handleViewRegisteredStudents = () => {
    history.push('/registered-students');
  };

  return (
    <div className="App">
      <h1>Student Management System</h1>
      <div>
        <label htmlFor="studentName">Student Name:</label>
        <input
          type="text"
          id="studentName"
          placeholder="Enter student name"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
        />
        <label htmlFor="studentPhoneNumber">Phone Number:</label>
        <input
          type="text"
          id="studentPhoneNumber"
          placeholder="Enter student phone number"
          value={newStudentPhoneNumber}
          onChange={(e) => setNewStudentPhoneNumber(e.target.value)}
        />
        <label htmlFor="studentCity">City:</label>
        <input
          type="text"
          id="studentCity"
          placeholder="Enter student city"
          value={newStudentCity}
          onChange={(e) => setNewStudentCity(e.target.value)}
        />
        <button onClick={handleAddStudent}>Add Student</button>
        <button onClick={handleViewRegisteredStudents}>View Registered Students</button>
      </div>
      <ViewStudents students={students} onDeleteStudent={handleDeleteStudent} />
    </div>
  );
}

export default Home;
