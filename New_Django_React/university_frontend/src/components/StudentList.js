// src/components/StudentList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/students/").then((res) => {
      setStudents(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Students</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} - {s.email} ({s.department.name})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
