import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import StudentList from './components/StudentList';
import PrivateRoute from "./components/PrivateRoute"


function App() {
  return (
     <Router>
      <div className="App">
        <Route path="/RegisterForm" component={RegisterForm}/>
        <Route exact path="/LoginForm" component={LoginForm} />
        <PrivateRoute  path="/protected" component={StudentList}/>
      </div>
    </Router>
  );
}

export default App;

// Need to:
// - install Axios