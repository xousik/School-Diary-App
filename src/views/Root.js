import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/Templates/MainTemplate/MainTemplate';
import Dashboard from 'views/DashBoard';
import { useForm } from 'react-hook-form';
import FormField from 'components/moleculs/FormField/FormField';
import axios from 'axios';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Navigate to="/group" replace />} />
          <Route path="/group" element={<Dashboard />}>
            <Route path=":id" element={<Dashboard />} />
          </Route>
        </Routes>
      </Wrapper>
    </MainTemplate>
  );
};

const UnauthenticatedApp = ({ handleSignIn }) => {
  const { handleSubmit, register } = useForm();
  const onSubmit = ({ login, password }) => handleSignIn({ login, password });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
      autoComplete="off"
    >
      <FormField
        label="handleSignIn"
        name="login"
        id="login"
        {...register('login', {
          required: 'Required',
        })}
      />
      <FormField label="password" name="password" id="password" type="password" {...register('password')} />

      <button type="submit">Submit</button>
    </form>
  );
};

const Root = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = ({ login, password }) => {
    axios
      .post('/login', {
        login,
        password,
      })
      .then((res) => console.log(res));
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp handleSignIn={handleSignIn} />}
      </ThemeProvider>
    </Router>
  );
};

export default Root;
