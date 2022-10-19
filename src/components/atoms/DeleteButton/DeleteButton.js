import React from 'react';
import { StyledButton, StyledIcon } from './DeleteButton.styles';

const DeleteButton = (props) => (
  <StyledButton {...props}>
    <StyledIcon>X</StyledIcon>
  </StyledButton>
);

export default DeleteButton;
