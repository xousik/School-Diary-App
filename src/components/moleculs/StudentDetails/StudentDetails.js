import { StyledWrapper, Average, StyledTitle, StyledList, StyledListItem, CourseInfo, Heading } from './StudentDetails.styles';
import { StyledAverage } from '../UsersListItem/UsersListItem.styles';

const StudentDetails = ({ currentStudent }) => {
  return (
    <StyledWrapper>
      <Average value={currentStudent.average}>{currentStudent.average}</Average>
      <StyledTitle>{currentStudent.name}</StyledTitle>
      <CourseInfo>
        <Heading>Course:</Heading>
        <p>Economy and finances</p>
      </CourseInfo>
      <Heading>Average grades:</Heading>
      <StyledList>
        <StyledListItem>
          {currentStudent.grades[0].subject}{' '}
          <StyledAverage value={currentStudent.grades[0].average}>{currentStudent.grades[0].average}</StyledAverage>
        </StyledListItem>
        <StyledListItem>
          {currentStudent.grades[1].subject}{' '}
          <StyledAverage value={currentStudent.grades[1].average}>{currentStudent.grades[1].average}</StyledAverage>
        </StyledListItem>
        <StyledListItem>
          {currentStudent.grades[2].subject}{' '}
          <StyledAverage value={currentStudent.grades[2].average}>{currentStudent.grades[2].average}</StyledAverage>
        </StyledListItem>
      </StyledList>
    </StyledWrapper>
  );
};

export default StudentDetails;
