import React from 'react';
import { Link } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { useStudents } from 'hooks/useStudents';
import { Wrapper, TitleWrapper, GroupWrapper } from './DashBoard.styles';
import { Title } from 'components/atoms/Title/Title';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { groups } = useStudents();
  const { id } = useParams();

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
        <StudentsList />
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
