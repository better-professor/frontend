import Popup from "reactjs-popup";
import React from "react";
import styled from "styled-components";

const StyledH4 = styled.h4`
  color: #00abff;
  font-size: 0.8em;
`;

const StyledH5 = styled.h5`
  color: darkblue;
  font-size: 0.8em;
`;

const ProjectModal = (props) => {

    return (<>
    <Popup
      trigger={<button className="send-msg-button"> View Projects </button>}
      modal
      closeOnDocumentClick
    >
      <span><StyledH4>Project Info</StyledH4>
      {props.projectsList.map(project => {
                return (
                  <>
                    <StyledH5>Project Name: {project.project_name}</StyledH5>
                    <StyledH4>Due Date: {project.deadline}</StyledH4>
                    <StyledH5>Deadline Type: {project.deadline_type}</StyledH5>
                  </>
                );
              })} </span>
    </Popup>
    </>

    )
}

export default ProjectModal;
  