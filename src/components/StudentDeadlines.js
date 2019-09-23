import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth"

import StudentList from "./StudentList";

const StudentDeadlines = () => {
  const [deadlineList, setDeadlineList] = useState([]);
  // fetch our deadlines data from the server when the component mounts
  // set that data to the deadlineList state property

  useEffect(() => {
    getDeadlines();
  }, [])

  const getDeadlines = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        console.log("get deadlines response", res);
        setColorList(res.data);
      })
      .catch(err => console.log(err.res));
  };

  return (
    <>
      {/* <StudentList deadlines={deadlineList} updateDeadlines={setDeadlineList} /> */}
      {/* <Students deadlines={deadlinesList} /> */}
      <MessagingForm />
    </>
  );
};

export default StudentDeadlines;