import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth"
import StudentList from "./StudentList";
import {NavLink}  from "react-router-dom";

const initialStudent = { user_id: 1, student_name: "James Jimmerson", major: "Geology", Deadlines: [{type: "Project"}
, {date:"24/09/2019"}]}

const Student = (props) => {
  const {student} = props;
  console.log("props from students", student);
  const [studentDeadlines, setStudentDeadlines] = useState([])
  // fetch our deadlines data from the server when the component mounts
  // set that data to the deadlineList state property

  // useEffect(() => {
  //   getDeadlines();
  // }, [])

  // const getDeadlines = () => {
  //   axiosWithAuth()
  //     .get(`http://localhost:5000/api/colors/${student.user_id}`)
  //     .then(res => {
  //       console.log("get deadlines response", res);
  //       setStudentDeadlines(res.data);
  //     })
  //     .catch(err => console.log(err.res));
  // };

  return (
    //!! need to render deadlines list using the GET request
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
   <NavLink to="/protected/Student/MessagingForm" className="send-button">Send Message</NavLink>
      {/* <MessagingForm studentName={student.name} /> */}
    </ul>
  );
};

export default Student;