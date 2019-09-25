import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const StyledDiv = styled.div`
  background-color: #00abff;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  /* height: 100vh; */
  width: 33.33vw;
 
`;

const StyledGoBack = styled.div`
  background-color: #00abff;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  /* height: 100vh; */
  width: 33.33vw;
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
  margin: 0.5em;
  padding: 0.5em;
  width: 80%;
`;

const StyledButton = styled.button`
  background-color: #00abff;
  color: white;
  margin: 1em;
  padding: 1em;
  width: 50%;
  border: none;
  border-radius: 1em;
`;

const StyledLabel = styled.label`
  margin: 1em;
`;

const StyledH2 = styled.h2`
  color: white;
  font-size: 1.3em;
  margin: 0;
`;
const StyledH1 = styled.h1`
  color: white;
  font-size: 1.8em;
`;

const StyledImg = styled.img`
  width: 30%;
`;

class AddStudents extends React.Component {
  state = {
    credentials: {
      student_id: "",
      first_name: "",
      last_name: "",
      major: "",
      projects_type: "",
      projects_date: "",
    }
  };

  
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the StudentList route
  
  addAStudent = e => {
    e.preventDefault();
    axiosWithAuth()
    .post(
      "https://better-professor-backend.herokuapp.com/students/register",
      this.state.credentials
      )
      .then(res => {
        console.log("token from register", res.data);
        alert("Student added successfully")
        // is payload correct? or should it be token? -- is user.id correct? ot should it be id?
        //localStorage.setItem('token', res.data.payload);
        //localStorage.setItem('id', res.data.id);
        //this.props.history.push('/protected');
      })
      .catch(err => alert(err.message));
    };
    
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
      console.log("values from form",this.state.credentials);
    };
    
    render() {
    return (
      <StyledDiv>
        <StyledGoBack>
        <NavLink className="go-back" to="/protected">{`<`}</NavLink>
        </StyledGoBack>
        <StyledH1>Add a new Student</StyledH1>
        <StyledImg src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-male-student-icon-png-image_4151037.jpg"></StyledImg>
        <StyledForm onSubmit={this.addAStudent}>
          <StyledLabel>Student ID</StyledLabel>
          <StyledInput
            type="text"
            name="student_id"
            value={this.state.credentials.student_id}
            onChange={this.handleChange}
          />
          <label>First name</label>
          <StyledInput
            type="text"
            name="first_name"
            value={this.state.credentials.first_name}
            onChange={this.handleChange}
          />
          <label>Last name</label>
          <StyledInput
            type="text"
            name="last_name"
            value={this.state.credentials.last_name}
            onChange={this.handleChange}
          />
          <label>Major</label>
          <StyledInput
            type="text"
            name="major"
            value={this.state.credentials.major}
            onChange={this.handleChange}
          />
           <label>Project type</label>
          <StyledInput
            type="text"
            name="projects_type"
            value={this.state.credentials.projects_type}
            onChange={this.handleChange}
          />
           <label>Project date</label>
          <StyledInput
            type="text"
            name="projects_date"
            value={this.state.credentials.projects_date}
            onChange={this.handleChange}/>
          <StyledButton>Add Student</StyledButton>
        </StyledForm>
      </StyledDiv>
    );
  }
}

export default AddStudents;
