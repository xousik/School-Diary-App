import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  width: 110px;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
`;

const NavTitle = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledTitle = styled.h1`
  width: 52px;
  margin-right: 15px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
`;

const StyledNavigation = styled.nav`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 20px;
  margin-top: 50px;
`;

const StyledLink = styled(NavLink)`
  padding-right: 25px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grey};
  text-decoration: none;
  position: relative;

  &.active::after {
    content: '';
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.grey};
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 0;
  }
`;

const NavBar = () => {
  return (
    <Wrapper>
      <NavTitle>
        <StyledTitle>Study Buddy</StyledTitle>
      </NavTitle>
      <StyledNavigation>
        <StyledLink end to="/">
          Dashboard
        </StyledLink>
        <StyledLink to="/add-user">Add Student</StyledLink>
        <StyledLink to="/settings">Settings</StyledLink>
        <StyledLink to="/logout">Logout</StyledLink>
      </StyledNavigation>
    </Wrapper>
  );
};

export default NavBar;
