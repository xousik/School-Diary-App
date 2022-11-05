import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/moleculs/UsersListItem/UsersListItem';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';

const StudentsList = () => {
  const { students } = useStudents();

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

StudentsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default StudentsList;
