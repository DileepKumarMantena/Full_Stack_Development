function onDeleteStudent(students, id, setStudents) {
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
  }
  
  export default onDeleteStudent;
  