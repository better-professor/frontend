import React from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import Better_professor from "../imgs/Better_professor.png";
 


const StyledDiv = styled.div`
  background-color: #00abff;
 
   /* #00abff; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:98.7vw;
  height:10vh;
  margin:0;
  /* border-bottom: 1px solid grey; */
`;

const StyledImg = styled.img`
  width: 8%;
  height: 5em;
  margin:5%;
`;

const NavLogo = () => {
  return (
    <StyledDiv>
        <StyledImg src={Better_professor}></StyledImg>
        <div>
        <NavLink className="log-out" to="/LoginForm">Login</NavLink>
        <NavLink className="log-out" to="RegisterForm">Register</NavLink>
        </div>
    </StyledDiv>
  );
};

export default NavLogo;
