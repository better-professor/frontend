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
  /* width: 100%; */
  height: 100vh;
`;
const StyledStudentList = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between;  */
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const StyledList = styled.div`
    height:10%; 
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
  const loginId = localStorage.getItem("id")
  useEffect(getStudents());
  // Get request(useEffect) needs to happen here, where we recieve student info
    const getStudents = () => {
      axiosWithAuth()
        .get(`https://better-professor-backend.herokuapp.com/students/user/${loginId}`)
        .then(res => {
          setStudentsList(res.data);
          console.log(res.data);
        })
        .catch(error => {
          alert(error.message);
        });
    };
    // this post request needs work
    // const addStudents = () => {
    //   axiosWithAuth()
    //     .post('https://better-professor-backend.herokuapp.com/students', setStudentsList)
    //     .then(res => {
    //       setStudentsList(res.data);
    //       console.log(res.data);
    //     })
    //     .catch(error => {
    //       alert(error.message);
    //     });
    // };

  return (
    //we need userid in line 85. Not sure how to get that there yet.
    <StyledDiv>
      <StyledH1>Hello Professor John Doe - user #:</StyledH1>
      <StyledStudentList>
        <StyledH2>Your students</StyledH2>
        {initialStudents.map(student => {
          return (
            < StyledList key={student.user_id}>
              <NavLink
                className="studentsNav"
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                  margin: "1em"
                }}
                to={`/protected/Student`}
              >
                {student.user_id}.{student.student_name}
              </NavLink>
              {/* <Route path="/protected/Student" render={((props) => <Student  student={student} />)} /> */}
            </ StyledList>
          );
        })}
      </StyledStudentList>

      <StyledForm onSubmit={this.addStudents}>
          <StyledLabel>Student Name</StyledLabel>
          <StyledInput
            type="text"
            name="student_name"
            value={setStudentsList.student_name}
            onChange={this.handleChange}
          />
          <label>Major</label>
          <StyledInput
            type="text"
            name="major"
            value={setStudentsList.major}
            onChange={this.handleChange}
          />
           <label>Last name</label>
          <StyledInput
            type="text"
            name="user_id"
            value={setStudentsList.user_id}
            onChange={this.handleChange}
          />
          <StyledButton>Add Student</StyledButton>
        </StyledForm>
    </StyledDiv>
  );
};

export default StudentList;
