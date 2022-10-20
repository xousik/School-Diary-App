import React from 'react';
import NavBar from 'components/organisms/NavBar/NavBar';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
