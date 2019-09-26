import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  width: 100%;
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
      student_name: "",
      major: "",
      user_id: ""
    }
  };

  addAStudent = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://better-professor-backend.herokuapp.com/students",
        this.state.credentials
      )
      .then(res => {
        console.log("token from register", res.data);
        alert("Student added successfully");
        const newStudent = {
          student: res.data.student_name,
          major: res.data.major,
          id: res.data.id,
          user_id: res.data.user_id
        };
        this.props.setStudentsList(studentsList => [...studentsList,newStudent]);
        console.log(this.props.studentsList);
        this.handleReset();
      })
      .catch(err => {
        alert(err.message);
        this.handleReset();
      });
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
    console.log("values from form", this.state.credentials);
    console.log("props from parent", this.props);
  };

  handleReset = e => {
    this.setState({
      credentials: {
        student_name: "",
        major: "",
        user_id: ""
      }
    }); // manually reset controlled fields ("password")
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
          <StyledLabel>Student Name</StyledLabel>
          <StyledInput
            type="text"
            name="student_name"
            value={this.state.credentials.student_name}
            onChange={this.handleChange}
          />
          <label>Major</label>
          <StyledInput
            type="text"
            name="major"
            value={this.state.credentials.major}
            onChange={this.handleChange}
          />
          <label>User ID</label>
          <StyledInput
            type="text"
            name="user_id"
            value={this.state.credentials.user_id}
            onChange={this.handleChange}
          />
          <StyledButton>Add Student</StyledButton>
        </StyledForm>
      </StyledDiv>
    );
  }
}
export default AddStudents;