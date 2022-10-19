import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 35px;
  padding: 4px 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
`;
