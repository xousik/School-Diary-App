import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/moleculs/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';

function UsersList(props) {
  return (
    <Wrapper>
      <ul>
        {users.map((userData, i) => (
          <UsersListItem index={i} key={userData.name} userData={userData} />
        ))}
      </ul>
    </Wrapper>
  );
}

export default UsersList;
