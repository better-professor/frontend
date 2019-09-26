import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Better_professor from "../imgs/Better_professor.png";
 


const StyledDiv = styled.div`
  background-color: #00abff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid grey; */
`;

const StyledImg = styled.img`
  width: 10%;
  height: 5em;
`;

const NavLogo = () => {
  return (
    <StyledDiv>
        <StyledImg src={Better_professor}></StyledImg>
    </StyledDiv>
  );
};

export default NavLogo;
