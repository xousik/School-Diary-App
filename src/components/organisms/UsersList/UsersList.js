import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/moleculs/UsersListItem/UsersListItem';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';
import FormField from 'components/moleculs/FormField/FormField';

const initialFormInputState = {
  name: '',
  attendance: '',
  average: '',
};

const UsersList = () => {
  const [users, setUsers] = useState(usersData);
  const [formInput, setFormInput] = useState(initialFormInputState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formInput.name,
      attendance: formInput.attendance,
      average: formInput.average,
    };
    setUsers([newUser, ...users]);
    setFormInput(initialFormInputState);
  };

  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledList>
          <StyledTitle>Add new student</StyledTitle>
          <FormField label="Name" id="name" name="name" value={formInput.name} onChange={handleChange} />
          <FormField label="Attendance" id="attendance" name="attendance" value={formInput.attendance} onChange={handleChange} />
          <FormField label="Average" id="average" name="average" value={formInput.average} onChange={handleChange} />
          <Button type="submit">Add</Button>
        </StyledList>
      </Wrapper>
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

export default UsersList;
