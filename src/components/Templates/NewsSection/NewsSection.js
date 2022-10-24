import React from 'react';
import { Wrapper } from 'components/Templates/NewsSection/NewsSection.styles';
import { ViewWrapper } from 'components/moleculs/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';

export const NewsSection = () => {
  return (
    <Wrapper>
      <h2>News feed section</h2>
      <ViewWrapper>
        <h3>Lorem ipsum</h3>
        <p>dolor sit amet</p>
        <Button>click me</Button>
      </ViewWrapper>
      <ViewWrapper>
        <h3>Lorem ipsum</h3>
        <p>dolor sit amet</p>
        <Button>click me</Button>
      </ViewWrapper>
      <ViewWrapper>
        <h3>Lorem ipsum</h3>
        <p>dolor sit amet</p>
        <Button>click me</Button>
      </ViewWrapper>
    </Wrapper>
  );
};
