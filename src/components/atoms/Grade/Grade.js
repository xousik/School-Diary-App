import styled from 'styled-components';

export const Grade = styled.div`
  width: 34px;
  height: 34px;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  text-align: center;
  line-height: 34px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
`;
