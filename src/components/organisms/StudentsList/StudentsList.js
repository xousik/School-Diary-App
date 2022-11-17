import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/moleculs/UsersListItem/UsersListItem';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';
import { useParams } from 'react-router-dom';

const StudentsList = ({ handleOpenStudentDetails }) => {
  const [students, setStudents] = useState([]);
  const { getStudentsByGroup } = useStudents();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      // if (id === undefined) {
      //   const students = await getStudentsByGroup();
      //   setStudents(students);
      // }
      const students = await getStudentsByGroup(id);
      setStudents(students);
    })();
  }, [getStudentsByGroup, id]);

  const deleteUser = (event, id) => {
    event.stopPropagation();
    const filteredUsers = students.filter((user) => user.id !== id);
    setStudents(filteredUsers);
  };

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => {
          return (
            <UsersListItem deleteUser={deleteUser} key={userData.id} userData={userData} onClick={() => handleOpenStudentDetails(userData.id)} />
          );
        })}
      </StyledList>
    </>
  );
};

StudentsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default StudentsList;
