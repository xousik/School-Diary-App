import React, { useState } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import Form from 'components/organisms/Form/Form';
import { users as usersData } from 'data/users';

const initialFormInputState = {
  name: '',
  attendance: '',
  average: '',
};

function Root(props) {
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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-user">Add user</Link>
          </nav>
          <Routes>
            <Route path="/" element={<UsersList deleteUser={deleteUser} users={users} />} />
            <Route path="/add-user" element={<Form handleChange={handleChange} handleAddUser={handleAddUser} formInput={formInput} />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
