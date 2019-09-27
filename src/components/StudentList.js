import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import Student from "./Student";
import { Route } from "react-router-dom";
import Logout from "./Logout";
import { Twitter, Linkedin, Facebook } from "react-social-sharing";

// import {
//   FacebookShareButton,
//   LinkedinShareButton,
//   TwitterShareButton
// } from "react-share";
// import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";

const StyledDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 33.33vw;
  border-right: 1px solid grey;
`;
const StyledStudentList = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

const StyledH3 = styled.h3`
  color: #00abff;
  font-size: 0.8em;
  margin-left: 1em;
  margin-right: 1em;
`;

const StyledImg = styled.img`
  width: 50%;
`;

const StudentList = props => {
  const loginId = localStorage.getItem("id");
  const user_firstName = localStorage.getItem("first_name");
  const user_lastName = localStorage.getItem("last_name");

  useEffect(() => {
    const getStudents = () => {
      axiosWithAuth()
        .get(
          `https://better-professor-backend.herokuapp.com/students/user/${loginId}`
        )
        .then(res => {
          props.setStudentsList(res.data);
        })
        .catch(error => {
          console.log(error.message);
        });
    };
    getStudents();
  }, []);

  return (
    <StyledDiv id="wrapper">
      <div class="scrollbar" id="style-default">
        <div class="force-overflow">
          <div className="share">
            <Twitter link="https://betterprofessor-marketing.netlify.com/"></Twitter>
            <Linkedin link="https://betterprofessor-marketing.netlify.com/"></Linkedin>
            <Facebook link="https://betterprofessor-marketing.netlify.com/"></Facebook>
          </div>
          <Route to="/protected/Logout" component={Logout} />
          <StyledStudentList>
            <StyledH2>
              Hello, Professor {user_firstName} {user_lastName}
            </StyledH2>
            <StyledImg src="https://icon-library.net/images/teacher-icon-png/teacher-icon-png-16.jpg"></StyledImg>
            <StyledH2> Your user id is: {loginId}</StyledH2>
            <StyledH3>
              {" "}
              Total number of Messages sent: {props.getMessage.length}
            </StyledH3>
            <StyledH3>
              {" "}
              Total number of students: {props.studentsList.length}
            </StyledH3>
            <StyledH3>
              {" "}
              Total number of projects pending review:{" "}
              {props.projectsList.length}
            </StyledH3>
            <StyledH2>Your list of students</StyledH2>
            {props.studentsList.map(student => {
              return (
                <StyledList key={student.id}>
                  <NavLink
                    to={`/protected/Student/${student.id}`}
                    className="studentsNav"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "blue",
                      margin: "1em"
                    }}
                  >
                    {student.id}.{student.student}
                  </NavLink>
                </StyledList>
              );
            })}
            <NavLink className="send-button" to="/protected/AddStudents">
              {" "}
              Add students
            </NavLink>
          </StyledStudentList>
        </div>
      </div>
    </StyledDiv>
  );
};
export default StudentList;
