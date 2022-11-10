import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { useStudents } from 'hooks/useStudents';
import { Wrapper, TitleWrapper, GroupWrapper } from './DashBoard.styles';
import { Title } from 'components/atoms/Title/Title';
import { useParams } from 'react-router-dom';
import useModal from 'components/organisms/Modal/useModal';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState();
  const { getGroups } = useStudents();
  const { id } = useParams();
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = (id) => {
    setCurrentStudent(id);
    console.log(currentStudent);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Group {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        {isOpen ? <Modal handleClose={handleCloseModal}>{currentStudent}</Modal> : null}
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
