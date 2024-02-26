import React from 'react';
import ViewStudents from './ViewStudents';

function RegisteredStudents({ students }) {
  return (
    <div className="App">
      <h1>Registered Students</h1>
      <ViewStudents students={students} />
    </div>
  );
}

export default RegisteredStudents;
