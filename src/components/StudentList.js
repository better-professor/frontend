import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import Student from "./Student";
import { Route } from "react-router-dom";
import Logout from "./Logout";

const initialStudents = [
  { user_id: 1, student_name: "James Jimmerson", major: "Geology" },
  { user_id: 2, student_name: "Mallory Jones", major: "History" },
  { user_id: 3, student_name: "Alice Wonderland", major: "History" },
  { user_id: 4, student_name: "Jennie Pullman", major: "History" },
  { user_id: 5, student_name: "Michael Johnson", major: "Computer Science" },
  { user_id: 6, student_name: "Usain Bolt", major: "Kineseology" }
];

const StyledDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
  width: 33.33vw;
  /* height: 100vh; */
  border-right: 1px solid grey;
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
  height: 10%;
`;

const StyledH2 = styled.h2`
  color: #00abff;
  font-size: 1.3em;
  margin-left: 1em;
  margin-right: 1em;
`;

const StyledH1 = styled.h1`
  color: white;
  font-size: 1.3em;
`;

const StyledForm = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2em;
  color: #00abff;
  width: 60%;
  border-radius: 1em;
  -moz-box-shadow: 3px 3px 5px 6px #115e9c;
  -webkit-box-shadow: 3px 3px 5px 6px #115e9c;
  box-shadow: 3px 3px 5px 6px #115e9c;
`;

const StyledInput = styled.input`
  margin: 1em;
  padding: 1em;
  width: 80%;
`;

const StyledButton = styled.button`
  background-color: #00abff;
  color: white;
  margin: 1em;
  padding: 1em;
  width: 30%;
  border: none;
  border-radius: 1em;
`;

const StyledLabel = styled.label`
  margin: 1em;
`;
const StyledImg = styled.img`
  width: 50%;
`;

const StudentList = props => {
  const [studentsList, setStudentsList] = useState([]);
  const loginId = localStorage.getItem("id");
  // Get request(useEffect) needs to happen here, where we recieve student info

  useEffect(() => {
    const getStudents = () => {
      axiosWithAuth()
        .get(
          `https://better-professor-backend.herokuapp.com/students/user/${loginId}`
        )
        .then(res => {
          console.log(" response from server", res);
          setStudentsList(res.data);
        })
        .catch(error => {
          alert(error.message);
        });
    };
    getStudents();
  }, []);
  // this post request needs work
  const addStudents = () => {
    axiosWithAuth()
      .post(
        "https://better-professor-backend.herokuapp.com/students",
        setStudentsList
      )
      .then(res => {
        setStudentsList(res.data);
        console.log(res.data);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    //we need userid in line 85. Not sure how to get that there yet.
    <StyledDiv>
      <Route to="/protected/Logout" component={Logout} />
      <StyledStudentList>
        <StyledH2>Hello Professor John Doe</StyledH2>
        <StyledImg src="https://icon-library.net/images/teacher-icon-png/teacher-icon-png-16.jpg"></StyledImg>
        <StyledH2> Your user id is:{loginId}</StyledH2>
        <StyledH2>Your list of students</StyledH2>
        {initialStudents.map(student => {
          return (
            <StyledList key={student.user_id}>
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
            </StyledList>
          );
        })}
        <NavLink className="send-button" to="/protected/AddStudents">
          Add students
        </NavLink>
      </StyledStudentList>
    </StyledDiv>
  );
};

export default StudentList;
