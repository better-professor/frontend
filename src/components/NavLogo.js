import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";


const StyledDiv = styled.div`
  background-color: #00abff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
`;

const StyledImg = styled.img`
  width: 10%;
  height: 5em;
`;

const NavLogo = () => {
  return (
    <StyledDiv>
        <StyledImg src="https://p7.hiclipart.com/preview/605/287/666/square-academic-cap-graduation-ceremony-computer-icons-graduation-cap.jpg"></StyledImg>
    </StyledDiv>
  );
};

export default NavLogo;
