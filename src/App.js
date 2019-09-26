import React, { useState, useEffect } from "react";
import axiosWithAuth from "./utils/axiosWithAuth";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import StudentList from "./components/StudentList";
import PrivateRoute from "./components/PrivateRoute";
import MessagingForm from "./components/MessagingForm";
import styled from "styled-components";
import AddStudents from "./components/AddStudents";
import Student from "./components/Student";
import AddProject from "./components/AddProject";
import NavLogo from "./components/NavLogo";

const StyledDiv = styled.div`
  background-color: #00abff;
  display: flex;
  align-items: flex-start;
`;

function App() {
  const [studentsList, setStudentsList] = useState([]);
  const [projectsList, setProjectsList] = useState([]);
  const [getMessage, setGetMessage] = useState([]);
  const loginId = localStorage.getItem("id");

  useEffect(() => {
    const getStudents = () => {
      axiosWithAuth()
        .get(
          `https://better-professor-backend.herokuapp.com/students/user/${loginId}`
        )
        .then(res => {
          setStudentsList(res.data);
        })
        .catch(error => {
          console.log(error.message);
        });
    };
    getStudents();
  }, []);
  return (
    <Router>
      <div className="App">
        <Route path="/" component={NavLogo} />
        <Route path="/RegisterForm" component={RegisterForm} />
        <Route exact path="/LoginForm" component={LoginForm} />
        <StyledDiv>
          <PrivateRoute
            path="/protected"
            projectsList={projectsList}
            setStudentsList={setStudentsList}
            getMessage={getMessage}
            studentsList={studentsList}
            component={StudentList}
          />
          <Route
            path="/protected/AddStudents"
            render={props => (
              <AddStudents
                setStudentsList={setStudentsList}
                studentsList={studentsList}
                {...props}
              />
            )}
          />
          <Route
            path="/protected/Student/:id"
            render={props => (
              <Student
                setGetMessage={setGetMessage}
                getMessage={getMessage}
                setProjectsList={setProjectsList}
                projectsList={projectsList}
                studentsList={studentsList}
                {...props}
              />
            )}
          />
          <Route
            path="/protected/Student/:id/MessagingForm"
            render={props => (
              <MessagingForm setGetMessage={setGetMessage} {...props} />
            )}
          />
          <Route
            path="/protected/Student/:id/AddProject"
            render={props => (
              <AddProject setProjectsList={setProjectsList} {...props} />
            )}
          />
        </StyledDiv>
      </div>
    </Router>
  );
}
export default App;