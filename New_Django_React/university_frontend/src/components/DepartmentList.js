import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/departments/').then((res) => {
      setDepartments(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Departments</h2>
      <ul>
        {departments.map((dept) => (
          <li key={dept.id}>{dept.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentList;