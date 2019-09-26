import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;
const Logout = () => {
  return (
    <StyledNavBar>
      <NavLink className="log-out" to="/LoginForm">
        Logout
      </NavLink>
    </StyledNavBar>
  );
};
export default Logout;
