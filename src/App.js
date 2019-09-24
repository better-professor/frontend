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

// - Talk to Laura and Matt about data structure, can they join data or should we
// have array of deadlines inside and array of students, inside users(professors)
// - We need an add student form inside StudentList! How will this change our component?

//Discuss:
// initialStudents looks good. Should we just add deadline_name, deadline_date on there?
// - Tell kiran to add an HTML a tag with the link to login