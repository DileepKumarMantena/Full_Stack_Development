// App.js
import React from 'react';
import StudentList from './components/StudentList';
import DepartmentList from './components/DepartmentList';

function App() {
  return (
    <div className="App">
      <h1>University Management System</h1>
      <DepartmentList />
      <StudentList />
    </div>
  );
}

export default App;