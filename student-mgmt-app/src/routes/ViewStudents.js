import React from 'react';

function ViewStudents({ students, onDeleteStudent }) {
  return (
    <div>
      <h2>Registered Students</h2>
      <ul>
        {students.map(student => (
          <Student key={student.id} student={student} onDeleteStudent={onDeleteStudent} />
        ))}
      </ul>
    </div>
  );
}

function Student({ student, onDeleteStudent }) {
  const handleDelete = () => {
    onDeleteStudent(student.id);
  };

  return (
    <li>
      {student.name}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default ViewStudents;
