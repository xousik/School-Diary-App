import styled from 'styled-components';
import { StyledAverage } from '../UsersListItem/UsersListItem.styles';
import { Title } from 'components/atoms/Title/Title';

export const StyledWrapper = styled.div`
  width: 100%;
  padding-left: 30px;
`;

export const Average = styled(StyledAverage)`
  position: absolute;
  left: 40px;
  width: 55px;
  height: 55px;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const StyledTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  text-align: center;
`;

export const CourseInfo = styled.div`
  margin: 50px 0 20px 0;

  & p {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const Heading = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.l};

  :nth-child(2n) {
    margin: 25px 0;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 40px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
