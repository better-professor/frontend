import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth"
import StudentList from "./StudentList";
import {NavLink}  from "react-router-dom";

const initialStudent = { user_id: 1, student_name: "James Jimmerson", major: "Geology", Deadlines: [{type: "Project"}
, {date:"24/09/2019"}]}

const Student = (props) => {
  const {student} = props;
  console.log("props from students", student);
  const [studentProjects, setStudentProjects] = useState([])
  // fetch our deadlines data from the server when the component mounts
  // set that data to the deadlineList state property

  // useEffect(() => {
  //   getStudentProjects();
  // }, [])

  // const getStudentProjects = () => {
  //   axiosWithAuth()
  //     .get(`http://localhost:5000/api/colors/${student.user_id}`)
  //     .then(res => {
  //       console.log("get projects response", res);
  //       setStudentProjects(res.data);
  //     })
  //     .catch(err => console.log(err.res));
  // };

  // const addStudentProject = () => {
  //   axiosWithAuth()
  //     .post('https://better-professor-backend.herokuapp.com/projects', setStudentProjects)
  //     .then(res => {
  //       setStudentProjects(res.data);
  //       console.log(res.data);
  //     })
  //     .catch(error => {
  //       alert(error.message);
  //     });
  // };

  return (
    <ul>
    <h1>Hello from student</h1>
    <h2>{initialStudent.student_name}</h2>
    <h1>{initialStudent.major}</h1>
    {initialStudent.Deadlines.map((deadline, index) => {
        return (<>
            <h1>{deadline.type}</h1>
        <h1>{deadline.date}</h1>
        </>)
        
    })}
    <form onSubmit={this.addStudentProject}>
          <input
            type="text"
            name="project_name"
            value={setStudentProjects.project_name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="deadline"
            value={setStudentProjects.deadline}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="deadline_type"
            value={setStudentProjects.deadline_type}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="description"
            value={setStudentProjects.description}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="student_id"
            value={setStudentProjects.student_id}
            onChange={this.handleChange}
          />
          <button>Add project</button>
        </form>
   <NavLink to="/protected/Student/MessagingForm" className="send-button">Send Message</NavLink>
      {/* <MessagingForm studentName={student.name} /> */}
    </ul>
  );
};
// **EXAMPLE PROJECT**
// project_name: 'Wild Goose Chase',
// deadline: '12/12/2019',
// deadline_type: 'Letter of reccomendation',
// description: 'Futilely pursue something that will never be attainable',
// student_id: 1
export default Student;