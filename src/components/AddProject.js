import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 850px;
  width: 33vw;
  border-left: 1px solid grey;
`;

const StyledForm = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

class AddProject extends React.Component {
  state = {
    projects: {
      project_name: "",
      deadline: "",
      deadline_type: "",
      description: ""
    }
  };

  AddAProject = e => {
    const newProject = {
      ...this.state.projects,
      student_id: parseInt(this.props.match.params.id)
    };
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://better-professor-backend.herokuapp.com/projects",
        newProject
      )
      .then(res => {
        this.props.setProjectsList(projects => [...projects, res.data]);
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
        project_name: "",
        deadline: "",
        deadline_type: "",
        description: ""
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
          <label>Project Deadline Type</label>
          <StyledInput
            type="text"
            name="deadline_type"
            value={this.state.projects.deadline_type}
            onChange={this.handleChange}
          />
          <label>Projects date</label>
          <StyledInput
            type="text"
            name="deadline"
            value={this.state.projects.deadline}
            onChange={this.handleChange}
          />
          <StyledButton>Add project</StyledButton>
        </StyledForm>
      </StyledDiv>
    );
  }
}
export default AddProject;