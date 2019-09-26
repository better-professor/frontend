import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
 


const StyledDiv = styled.div`
  background-color: rgba(255,255,255,.5);
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
        <StyledImg src="https://imgur.com/gallery/uTn0qfZ"></StyledImg>
    </StyledDiv>
  );
};

export default NavLogo;
