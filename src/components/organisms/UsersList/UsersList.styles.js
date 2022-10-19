import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledList = styled.ul``;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;
