import React from 'react';
import NavBar from 'components/organisms/NavBar/NavBar';
import { Wrapper } from './MainTemplate.styles';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';
// import { NewsSection } from 'components/Templates/NewsSection/NewsSection';
import SideSection from '../SideSection/SideSection';
import { useLocation } from 'react-router-dom';

const MainTemplate = ({ children }) => {
  const location = useLocation();
  return (
    <Wrapper>
      <NavBar />
      <SearchBar />
      {children}
      <SideSection notes={location.pathname === '/notes'} />
    </Wrapper>
  );
};

export default MainTemplate;
