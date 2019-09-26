import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { parse } from "url";

const initialStudent = {
  student_id: 1,
  student_name: "James Jimmerson",
  major: "Geology",
  deadlines: { type: "Project", date: "24/09/2019" }
};

const postStudentProject = {
  user_id: "",
  student_name: " ",
  major: " ",
  deadlines: [{ type: " " }, { date: " " }]
};

const StyledDiv = styled.div`
  background-color: #00abff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  width: 33.33vw;
`;

const StyledH2 = styled.h2`
  color: white;
  font-size: 1.3em;
  margin: 0;
`;
const StyledH3 = styled.h1`
  color: white;
  font-size: 1em;
`;

const StyledH4 = styled.h4`
  color: white;
  font-size: 0.8em;
`;

const StyledImg = styled.img`
  width: 50%;
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

class Student extends React.Component {
  state = {
    student: {}
  };

  componentDidMount() {
    this.findStudent();
    this.getProjects();
    this.getMessages();
  }
  componentDidUpdate(prvProps) {
    if (
      prvProps.match.params.id != this.props.match.params.id ||
      prvProps.studentsList != this.props.studentsList
    )
      this.findStudent();
    if (prvProps.match.params.id != this.props.match.params.id) {
      this.getProjects();
      this.getMessages();
    }
  }

  findStudent = () => {
    const student = this.props.studentsList.find(student => {
      return student.id === parseInt(this.props.match.params.id);
    });
    this.setState({ student });
  };

  getProjects = () => {
    axiosWithAuth()
      .get(
        `https://better-professor-backend.herokuapp.com/projects/students/${this.props.match.params.id}`
      )
      .then(res => {
        console.log("response from GET projects in Student.js", res);
        this.props.setProjectsList(res.data);
      })
      .catch(error => {
        console.log("error from Student component", error.message);
        this.props.setProjectsList([]);
      });
  };

  getMessages = () => {
    axiosWithAuth()
      .get(
        `https://better-professor-backend.herokuapp.com/messages/students/${this.props.match.params.id}`
      )
      .then(res => {
        console.log("response from GET projects in Student.js", res);
        this.props.setGetMessage(res.data);
      })
      .catch(error => {
        console.log("error from Student component", error.message);
        this.props.setGetMessage([]);
      });
  };

  addStudentProject = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://better-professor-backend.herokuapp.com/users",
        this.postStudentProject
      )
      .then(res => {
        console.log("response from server", res);
      })
      .catch(err => alert(err.message));
  };

  render() {
    console.log("messages from student", this.props.getMessage);
    return (
      <StyledDiv>
        <StyledGoBack>
          <NavLink className="go-back" to="/protected">{`<`}</NavLink>
        </StyledGoBack>
        <ul>
          <StyledH2>
            You are currently viewing records
            <br />
            for student id number:{this.state.student && this.state.student.id}
          </StyledH2>
          <StyledImg src="https://img.pngio.com/registration-for-under-graduate-student-icon-png-free-student-icon-png-820_731.png"></StyledImg>
          <StyledH3>
            Student Name: {this.state.student && this.state.student.student}
          </StyledH3>
          <StyledH3>
            Student Major: {this.state.student && this.state.student.major}
          </StyledH3>
        </ul>
        <>
          <StyledH3>Student Projects </StyledH3>
          {this.props.projectsList.map(project => {
            return (
              <>
                <StyledH4>Due Date: {project.deadline}</StyledH4>
                <StyledH4>Deadline Type: {project.deadline_type}</StyledH4>
              </>
            );
          })}
        </>
        <>
          <StyledH3>Sent Messages </StyledH3>
          {this.props.getMessage.map(message => {
            console.log("message", message.date, message.message);
            return (
              <div>
                <StyledH4>Message date:{message.date}</StyledH4>
                <StyledH4>Sent Message:{message.message}</StyledH4>
              </div>
            );
          })}
        </>

        <NavLink
          to={`/protected/Student/${this.props.match.params.id}/MessagingForm`}
          className="send-msg-button"
        >
          Send a Message
        </NavLink>
        <NavLink
          to={`/protected/Student/${this.props.match.params.id}/AddProject`}
          className="send-msg-button"
        >
          Add a new Project
        </NavLink>
      </StyledDiv>
    );
  }
}
export default Student;