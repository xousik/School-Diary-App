import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 0 20px 20px;
  padding-bottom: 20px;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const NameInfoWrapper = styled.div`
  margin: 0 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.grey};
  p:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
