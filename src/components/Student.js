import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth"
import StudentList from "./StudentList";

const Student = (props) => {
  const {student} = props;
  console.log("props from students", student);
  const [studentDeadlines, setStudentDeadlines] = useState([])
  // fetch our deadlines data from the server when the component mounts
  // set that data to the deadlineList state property

  useEffect(() => {
    getDeadlines();
  }, [])

  const getDeadlines = () => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/colors/${student.user_id}`)
      .then(res => {
        console.log("get deadlines response", res);
        setStudentDeadlines(res.data);
      })
      .catch(err => console.log(err.res));
  };

  return (
    //!! need to render deadlines list using the GET request
    <>
    <h1>Hello from student</h1>
      {/* <MessagingForm studentName={student.name} /> */}
    </>
  );
};

export default Student;