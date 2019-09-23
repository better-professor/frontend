import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import RegisterForm from './components/RegisterForm';

function App() {
  return (
     <Router>
      <div className="App">
        <Route exact path="/" component={LoginForm} />
        <PrivateRoute exact path="/protected" component={StudentList} />
        <Route path="/RegisterForm" component={RegisterForm}/>
      </div>
    </Router>
  );
}

export default App;

// Need to:
// - install Axios