import React from 'react';
import NavBar from 'components/organisms/NavBar/NavBar';
import { Wrapper } from './MainTemplate.styles';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';
import { NewsSection } from 'components/Templates/NewsSection/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;
