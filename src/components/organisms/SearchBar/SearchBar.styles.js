import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 100%;
    max-width: 350px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;

  p {
    margin: 5px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchResults = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 9999;
  max-height: 500px;
  overflow-y: scroll;
  padding: 10px;
  border-radius: 15px;
  list-style: none;
  width: 100%;
  position: absolute;
  left: 0;
  top: 40px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const SearchResultsItem = styled.li`
  cursor: pointer;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.colors.lightPurple : theme.colors.white)};
  border-radius: 15px;
  width: 100%;
  padding: 15px 5px;
  margin: 5px 0;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
`;
