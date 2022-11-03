import React from 'react';
import { Wrapper, NavLogo, StyledLink } from './NavBar.styles';

const NavBar = () => {
  return (
    <Wrapper>
      <NavLogo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </NavLogo>
      <StyledLink end to="/group">
        Dashboard
      </StyledLink>
      <StyledLink to="/add-user">Add Student</StyledLink>
      <StyledLink to="/settings">Settings</StyledLink>
      <StyledLink to="/logout">Logout</StyledLink>
    </Wrapper>
  );
};

export default NavBar;
