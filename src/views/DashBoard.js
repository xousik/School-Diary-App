import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { useStudents } from 'hooks/useStudents';
import { Wrapper, TitleWrapper, GroupWrapper } from './DashBoard.styles';
import { Title } from 'components/atoms/Title/Title';
import { useParams } from 'react-router-dom';
import useModal from 'hooks/useModal';
import StudentDetails from 'components/moleculs/StudentDetails/StudentDetails';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({});
  const { getGroups, getStudentById } = useStudents();
  const { id } = useParams();
  const { Modal, isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentsDetails = async (id) => {
    const studentDetails = await getStudentById(id);
    setCurrentStudent(studentDetails);
    handleOpenModal();
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
        <StudentsList handleOpenStudentsDetails={handleOpenStudentsDetails} />
        {isModalOpen ? (
          <Modal handleCloseModal={handleCloseModal}>
            <StudentDetails currentStudent={currentStudent} />
          </Modal>
        ) : null}
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
