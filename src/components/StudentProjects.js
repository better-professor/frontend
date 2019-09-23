import React from "react";
import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const StudentProjects = () => {
  const [projectList, setProjectList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getColors();
  }, [])

  const getColors = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        console.log("get colors response", res);
        setColorList(res.data);
      })
      .catch(err => console.log(err.res));
  };


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default StudentProjects;