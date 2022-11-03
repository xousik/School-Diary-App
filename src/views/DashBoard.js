import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/moleculs/ViewWrapper/ViewWrapper';
import { useParams } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';
import axios from 'axios';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
    axios
      .get(`/students/${id}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <ViewWrapper>
      <UsersList users={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
