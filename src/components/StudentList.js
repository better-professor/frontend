import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialStudents = [
  { user_id: 1, student_name: "James Jimmerson", major: "Geology" },
  { user_id: 2, student_name: "Mallory Jones", major: "History" },
  { user_id: 3, student_name: "Alice Wonderland", major: "History" },
  { user_id: 4, student_name: "Jennie Pullman", major: "History" },
  { user_id: 5, student_name: "Michael Johnson", major: "Computer Science" },
  { user_id: 6, student_name: "Usain Bolt", major: "Kineseology" }
];

const StudentList = props => {
  const [studentsList, setStudentsList] = useState([]);

  //useEffect(getStudents());
  // Get request(useEffect) needs to happen here, where we recieve student info
  // shape of Student: id, studentName, studentMajor, studentDeadlines
  // shape of Professor: userName, lastName;
  //use token?
//   const getStudents = () => {
//     axiosWithAuth()
//       .get("https://better-professor-backend.herokuapp.com/user1/students")
//       .then(res => {
//         setStudentsList(res.data);
//         console.log(res.data);
//       })
//       .catch(error => {
//         alert(error.message);
//       });
//   };

  return (
    <>
      <div>Hello Professor John Doe</div>
      <ul >
      {initialStudents.map(student => {
        return (
          <div key={student.user_id}>
            <NavLink to={`/Student/${student.user_id}`}>
              {student.student_name}
            </NavLink>
          </div>
        );
      })}
      </ul>

      {/* <Student 
        student={student}
         /> */}
    </>
  );
};

export default StudentList;
