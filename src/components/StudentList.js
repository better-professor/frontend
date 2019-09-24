import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import Student from "./Student";
import {Route} from "react-router-dom";

const initialStudents = [
  { user_id: 1, student_name: "James Jimmerson", major: "Geology" },
  { user_id: 2, student_name: "Mallory Jones", major: "History" },
  { user_id: 3, student_name: "Alice Wonderland", major: "History" },
  { user_id: 4, student_name: "Jennie Pullman", major: "History" },
  { user_id: 5, student_name: "Michael Johnson", major: "Computer Science" },
  { user_id: 6, student_name: "Usain Bolt", major: "Kineseology" }
];

const StyledDiv = styled.div`
  background-color: #00abff;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
  height: 100vh;
`;
const StyledStudentList = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between;  */
  align-items: center;
  width: 30%;
  height: 100vh;
`;
const StyledH2 = styled.h2`
  color: #00abff;
  font-size: 1.3em;
`;

const StyledH1 = styled.h1`
  color: white;
  font-size: 1.3em;
`;

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
    <StyledDiv>
      <StyledH1>Hello Professor John Doe</StyledH1>
      <StyledStudentList>
        <StyledH2>Your students</StyledH2>
        {initialStudents.map(student => {
          return (
            <div key={student.user_id}>
              <NavLink
                activeClassName="studentsNav"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                  margin: "1em"
                }}
                to={`/protected/Student/${student.user_id}`}
              >
                {student.user_id}.{student.student_name}
              </NavLink>
              {/* <Student  student={student} /> */}
            </div>
          );
        })}
      </StyledStudentList>
    </StyledDiv>
  );
};

export default StudentList;
