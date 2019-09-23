import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth"

// import Students from "./Students";
import StudentList from "./StudentList";

const StudentDeadlines = () => {
  const [deadlineList, setDeadlineList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

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
      <StudentList deadlines={deadlineList} updateDeadlines={setDeadlineList} />
      {/* <Students deadlines={deadlinesList} /> */}
    </>
  );
};

export default StudentDeadlines;