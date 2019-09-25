import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import StudentList from './components/StudentList';
import PrivateRoute from "./components/PrivateRoute"
import Student from './components/Student';
import MessagingForm from './components/MessagingForm';
import styled from "styled-components";
import AddStudents from './components/AddStudents';

const StyledDiv = styled.div`
  background-color:#00abff;
  /* #00abff; */
  display: flex;
  /* flex-direction: column; */
  /* justify-content: space-between; */
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
`;



function App() {
  return (
     <Router>
      <div className="App">
        <Route path="/RegisterForm" component={RegisterForm}/>
        <Route exact path="/LoginForm" component={LoginForm} />
        <StyledDiv>
        <PrivateRoute  path="/protected" component={StudentList}/>
        <Route path="/protected/AddStudents" component={AddStudents}/>
        <Route path="/protected/Student" component={Student}/>
        <Route path="/protected/Student/MessagingForm" component={MessagingForm}/>
        </StyledDiv>
      </div>
    </Router>
  );
}

export default App;

// Need to:
// - install Axios
// - Need to display Prof id and student id.
// - need a dynamic id in the POST url 

// Discuss:
// - Login/Register POST request id set to localStorage
// - Students dont have their own IDs yet, thus we cant post projects to them!
// - we need userid in line 85 of studentlist. Not sure how to get that there yet.

// Notes:
// for testing use -- username: prof | password: prof
// there is a possibility that values in forms should not include "set"
