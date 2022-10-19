import React from 'react';
import UsersListItem from 'components/moleculs/UsersListItem/UsersListItem';
import PropTypes from 'prop-types';
import { Wrapper, StyledList } from './UsersList.styles';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default UsersList;
