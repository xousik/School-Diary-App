import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Wrapper, NavLogo, StyledLink } from './NavBar.styles';

const NavBar = () => {
  const auth = useAuth();

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
      <StyledLink to="" onClick={auth.signOut}>
        Logout
      </StyledLink>
    </Wrapper>
  );
};

export default NavBar;
