import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 35px;
  padding: ${({ isBig }) => (isBig ? '7px 25px' : '4px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.xl : fontSize.l)};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
`;
