import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth"
import StudentList from "./StudentList";

const Student = () => {
  const [studentDeadlines, setStudentDeadlines] = useState([])
  // fetch our deadlines data from the server when the component mounts
  // set that data to the deadlineList state property

  useEffect(() => {
    getDeadlines();
  }, [])

  const getDeadlines = () => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/colors/${student.id}`)
      .then(res => {
        console.log("get deadlines response", res);
        setColorList(res.data);
      })
      .catch(err => console.log(err.res));
  };

  return (
    //!! need to render deadlines list using the GET request
    <>
      <MessagingForm studentName={student.name} />
    </>
  );
};

export default StudentDeadlines;