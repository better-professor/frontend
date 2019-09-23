import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth"

class MessagingForm extends React.Component {
  state = {
    message: {
      studentName: '',
      messageText: ''
    }
  };

  sendMessage = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/login', this.state.message)
      .then(res => {
        console.log(this.props.history)
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
      <>
        <h1>Welcome to the Better Professor App!</h1>
        
        <form onSubmit={this.login}>
          <input
            type="text"
            name="studentname"
            value={this.state.message.studentName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="messagetext"
            value={this.state.message.messageText}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </>
    ); 
  }
};

export default MessagingForm;