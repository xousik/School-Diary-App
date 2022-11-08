import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/moleculs/UsersListItem/UsersListItem';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';
import { useParams } from 'react-router-dom';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const { getStudents } = useStudents();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const students = await getStudents(id);
      setStudents(students);
    })();
  }, [getStudents, id]);

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
