import React from 'react';
import UsersListItem from 'components/moleculs/UsersListItem/UsersListItem';
import PropTypes from 'prop-types';
import { Wrapper } from 'components/atoms/ViewWrapper/ViewWrapper';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <ul>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default UsersList;
