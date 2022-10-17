import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 23px;
  height: 23px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: white;
`;

export const StyledIcon = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
