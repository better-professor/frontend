import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

const StyledDiv= styled.div`
  background-color: #00abff;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  height: 100vh;
`;

const StyledForm= styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2em;
  color: #00abff;
  width: 60%;
  border-radius: 1em;
  -moz-box-shadow:    3px 3px 5px 6px #115E9C;
  -webkit-box-shadow: 3px 3px 5px 6px #115E9C;
  box-shadow:         3px 3px 5px 6px #115E9C;
`;

const StyledInput = styled.input`
    margin: 1em;
    padding: 1em;
    width: 80%;
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
  color: white;
  font-size: 1.3em;
  margin:0;
`;
const StyledH1 = styled.h1`
  color: white;
  font-size: 1.8em;
 
`;


class LoginForm extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the StudentList route

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://better-professor-backend.herokuapp.com/users/login", this.state.credentials)
      .then(res => {
        console.log(" token from server", res.data.token)
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err.response));
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
    
  };

  render() {
    return (
      <StyledDiv>
        <StyledH1>Welcome to the Better Professor App!</StyledH1>
        <StyledH2>Login to continue</StyledH2>
        
        <StyledForm className="form" onSubmit={this.login}>
          <StyledLabel>User name</StyledLabel>
          <StyledInput
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <StyledInput
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <StyledButton>Log in</StyledButton>
        </StyledForm>
      </StyledDiv>
    ); 
  }
};

export default LoginForm;