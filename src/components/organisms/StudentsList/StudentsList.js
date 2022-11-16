import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StudentsListItem from 'components/moleculs/StudentsLIstItem/StudentsListItem';
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

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => {
          // console.log(userData.id);
          return <UsersListItem key={userData.id} userData={userData} onClick={() => handleOpenStudentDetails(userData.id)} />;
        })}
      </StyledList>
    </>
  );
};

StudentsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default StudentsList;
