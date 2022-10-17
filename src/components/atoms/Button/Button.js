import React from 'react';
import { StyledButton, StyledIcon } from './Button.styles';

const Button = (props) => (
  <StyledButton {...props}>
    <StyledIcon>X</StyledIcon>
  </StyledButton>
);

export default Button;
