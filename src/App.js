import React, { useState, useEffect } from "react";
import axiosWithAuth from "./utils/axiosWithAuth";
import logo from "./logo.svg";
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
  /* #00abff; */
  display: flex;
  /* flex-direction: column; */
  /* justify-content: space-between; */
  align-items: flex-start;
  /* height: 100vh; */
  /* width: 100vw; */
  /* height: 100vh; */
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
          console.log(" response from server", res);
          setStudentsList(res.data);
        })
        .catch(error => {
          alert(error.message);
        });
    };
    // const getProjects = () => {
    //   axiosWithAuth()
    //       .get(
    //         `https://better-professor-backend.herokuapp.com/projects/students/${this.state.student.id}`
    //       )
    //       .then(res => {
    //         console.log("response from GET projects in Student.js", res);
    //         setProjectsList(res.data)
    //       })
    //       .catch(error => {
    //         alert(error.message);
    //       });
    //   };
    getStudents();
    // getProjects();
  }, []);
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
    <Router>
      <div className="App">
        <Route path="/" component={NavLogo} />
        <Route path="/RegisterForm" component={RegisterForm} />
        <Route exact path="/LoginForm" component={LoginForm} />
        <StyledDiv>
          <PrivateRoute path="/protected"  setStudentsList={setStudentsList} studentsList={studentsList} component={StudentList} />
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
            render={props => <Student setGetMessage={setGetMessage} getMessage={getMessage} setProjectsList={setProjectsList} projectsList={projectsList} studentsList={studentsList} {...props} />}
          />
          <Route
            path="/protected/Student/:id/MessagingForm"
            render={(props) => <MessagingForm setGetMessage={setGetMessage} {...props}/>}
          />
          <Route
            path="/protected/Student/:id/AddProject"
            render={(props)=> <AddProject setProjectsList={setProjectsList} {...props} />}
          />
        </StyledDiv>
      </div>
    </Router>
  );
}

export default App;

// Need to:
// ----nothing in cue----

// Discuss:
// GET/POST for projects is still not working:
// - it could be that there needs to be a projectsList state hook in App.js
//   so that we could make our projects GET request here (without the need of context)
//

// Notes:
// for testing use -- username: prof | password: prof
