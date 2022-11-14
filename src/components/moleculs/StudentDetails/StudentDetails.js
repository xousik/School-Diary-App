import { Title } from 'components/atoms/Title/Title';
import { StyledAverage } from '../UsersListItem/UsersListItem.styles';
import { StyledWrapper } from './StudentDetails.styles';

const StudentDetails = ({ currentStudent }) => {
  return (
    <StyledWrapper>
      <Title>
        {currentStudent.name} | Group {currentStudent.group}
      </Title>
      <p>Attendance: {currentStudent.attendance}</p>
      <StyledAverage value={currentStudent.average}>{currentStudent.average}</StyledAverage>
    </StyledWrapper>
  );
};

export default StudentDetails;
