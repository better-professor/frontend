import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

const StyledDiv= styled.div`
  background-color: white;
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
  /* margin: 0.2em; */
  color: #00abff;
  width: 100%;
  /* border-radius: 1em; */
  /* -moz-box-shadow:    3px 3px 5px 6px #115E9C;
  -webkit-box-shadow: 3px 3px 5px 6px #115E9C;
  box-shadow:         3px 3px 5px 6px #115E9C; */
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
  color: #00abff;
  font-size: 1.3em;
  margin:0;
`;
const StyledH1 = styled.h1`
  color: #00abff;
  font-size: 1.8em;
 
`;

const StyledImgCont = styled.div`
width: 50vw;
height: 100vh;
`;

const StyledImage = styled.img`
width:100%;
height:100vh;


`;

const StyledFormNImage = styled.div`
  background-color: #00abff;
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  align-items:center;
  height: 100vh;
  width: 100vw;
`;

const StyledDivForm = styled.div`
width:50vw;
height:100vh;
background-color: white;
`;


class RegisterForm extends React.Component {
  state = {
    credentials: {
      username: '',
      first_name:'',
      last_name:'',
      password: ''
    }
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the StudentList route

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://better-professor-backend.herokuapp.com/users/register", this.state.credentials)
      .then(res => {
        console.log("token from register", res.data)
        // is payload correct? or should it be token? -- is user.id correct? ot should it be id?
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('first_name', res.data.first_name);
        localStorage.setItem('last_name', res.data.last_name);
        this.props.history.push('/LoginForm');
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
        <StyledFormNImage>
        <StyledImgCont>
          <StyledImage src="https://images.pexels.com/photos/1350615/pexels-photo-1350615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></StyledImage>
        </StyledImgCont>
        <StyledDivForm>
        <StyledH1>Welcome to the Better Professor App! </StyledH1>
        <StyledH2>Register your information below to start your journey</StyledH2>
        
        <StyledForm onSubmit={this.login}>
          <StyledLabel>Username</StyledLabel>
          <StyledInput
            type="text"
            name="username"
            value={this.state.credentials.username}
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
          <label>Password</label>
          <StyledInput
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <StyledButton>Register</StyledButton>
        </StyledForm>
        </StyledDivForm>
        </StyledFormNImage>
        
        
      </StyledDiv>
    ); 
  }
};

export default RegisterForm;