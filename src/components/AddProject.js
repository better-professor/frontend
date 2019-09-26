import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  height: 100vh;
  width: 33vw;
  border-left: 1px solid grey;
`;

const StyledForm = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  margin: 1em;
  color: #00abff;
  width: 60%;
  /* height: 80vh; */
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
  color: #00abff;
  font-size: 1.8em;
  margin: 0;
`;

const StyledImg = styled.img`
  width: 30%;
`;
const StyledGoBack = styled.div`
  background-color: white;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  /* height: 100vh; */
  width: 100%;
`;

class AddProject extends React.Component {
  state = {
    projects: {
      project_id: "",
      project_name: "",
      deadline: "",
      deadline_type: "",
      description: ""
    }
  };

  AddAProject = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://better-professor-backend.herokuapp.com/projects",
        this.state.projects
      )
      .then(res => {
        console.log("hello from POST project", res.data);
        alert("Project added successfully");
        this.handleReset();
      })
      .catch(err => {
        this.handleReset();
        console.log(err.message);
      });
  };

  handleReset = e => {
    this.setState({
      projects: {
        project_id: "",
        project_name: "",
        deadline: "",
        deadline_type: "",
        description: "",
        projects_date: ""
      }
    });
  };

  handleChange = e => {
    this.setState({
      projects: {
        ...this.state.projects,
        [e.target.name]: e.target.value
      }
    });
    console.log("values from add project form", this.state.projects);
  };

  render() {
    return (
      <StyledDiv>
        <StyledGoBack>
          <NavLink className="back-go" to="/protected/Student">{`<`}</NavLink>
        </StyledGoBack>
        <StyledH1>Add a new project</StyledH1>
        <StyledImg src="https://cdn4.iconfinder.com/data/icons/project-management-1-11/65/32-512.png"></StyledImg>
        <StyledForm onSubmit={this.AddAProject}>
          <StyledLabel>Project ID</StyledLabel>
          <StyledInput
            type="text"
            name="project_id"
            value={this.state.projects.project_id}
            onChange={this.handleChange}
          />
          <label>Project name</label>
          <StyledInput
            type="text"
            name="project_name"
            value={this.state.projects.project_name}
            onChange={this.handleChange}
          />
          <label>Project Description</label>
          <StyledInput
            type="text"
            name="description"
            value={this.state.projects.description}
            onChange={this.handleChange}
          />
          <label>Projects date</label>
          <StyledInput
            type="text"
            name="projects_date"
            value={this.state.projects.projects_date}
            onChange={this.handleChange}
          />
          <StyledButton>Add project</StyledButton>
        </StyledForm>
      </StyledDiv>
    );
  }
}

export default AddProject;
