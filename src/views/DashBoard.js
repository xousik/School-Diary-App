import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { useStudents } from 'hooks/useStudents';
import { Wrapper, TitleWrapper, GroupWrapper } from './DashBoard.styles';
import { Title } from 'components/atoms/Title/Title';
import { useParams } from 'react-router-dom';
import useModal from 'hooks/useModal';
import StudentDetails from 'components/moleculs/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({});
  const { getGroups, getStudentById } = useStudents();
  const { id } = useParams();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
    const studentDetails = await getStudentById(id);
    setCurrentStudent(studentDetails);
    handleOpenModal();
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Group {id}</Title>
        <nav>
          {groups.map((group) => {
            return (
              <Link key={group.id} to={`/group/${group.id}`}>
                {group.id}
              </Link>
            );
          })}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
          <StudentDetails currentStudent={currentStudent} />
        </Modal>
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
