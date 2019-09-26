import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const StyledDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  /* height: 100vh; */
  width:33.33vw;
  margin: 1em;
  margin-top:0;
  border-left: 1px solid grey;
`;

const StyledForm= styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2em;
  color: #00abff;
  width: 30vw;
  border-radius: 1em;
  -moz-box-shadow:    3px 3px 5px 6px #115E9C;
  -webkit-box-shadow: 3px 3px 5px 6px #115E9C;
  box-shadow:         3px 3px 5px 6px #115E9C;
`;

const StyledInput = styled.input`
    margin: 0.9em;
    padding: 0.9em;
    width: 80%;
`;

const StyledInputText = styled.input`
    margin: 1em;
    padding: 1em;
    width: 80%;
    height:10vh;
`;

const StyledButton = styled.button`
  background-color: #00abff;
  color: white;
  margin: 1em;
  padding: 1em;
  width: 30%;
  border: none;
  border-radius: 1em;
`;
const StyledLabel = styled.label`
  margin:1em;
`;

const StyledH2 = styled.h2`
  color: #00abff;
  font-size: 1.3em;
  margin:1em;
`;
const StyledH1 = styled.h1`
  color: white;
  font-size: 1.8em;
 
`;

const StyledImg = styled.img`
  width: 50%;
`;
const StyledGoBack = styled.div`
  background-color: white;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  /* height: 100vh; */
  width: 33.33vw;
`;
class MessagingForm extends React.Component {
  state = {
    message: {
      student_name: '',
      message_text: ''
    }
  };

  sendMessage = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/login', this.state.message)
      .then(res => {
        console.log(this.props.history)
        this.handleReset();
      })
      .catch(err => {
        console.log(err.message);
        this.handleReset();
      } );
  };

  handleChange = e => {
    this.setState({
      message: {
        ...this.state.message,
        [e.target.name]: e.target.value
      }
    });
    console.log("form values from messaging", this.state.message)
  };
  handleReset = (e) => {
    this.setState({  message: {
      student_name: '',
      message_text: ''
    } }) 
}

  render() {
    return (
      <StyledDiv>
        <StyledGoBack>
        <NavLink className="back-go" to="/protected/Student">{`<`}</NavLink>
        </StyledGoBack>
        <StyledH2>Send Message to Student</StyledH2>
        <StyledImg src="https://assets.dryicons.com/uploads/icon/svg/8859/cdf7ad61-0549-4442-a349-d17717288163.svg"></StyledImg>
        <StyledForm onSubmit={this.login}>
          <StyledLabel>Student Name</StyledLabel>
          <StyledInput
            type="text"
            name="student_name"
            value={this.state.message.student_name}
            onChange={this.handleChange}
          />
          <label>Message</label>
          <StyledInputText
            type="text"
            name="message_text"
            value={this.state.message.message_text}
            onChange={this.handleChange}
          />
          <StyledButton>Submit</StyledButton>
        </StyledForm>
      </StyledDiv>
    ); 
  }
};

export default MessagingForm;