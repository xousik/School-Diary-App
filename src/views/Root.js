import React from 'react';
import { Wrapper } from './Root.styles';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/Templates/MainTemplate/MainTemplate';
import Dashboard from 'views/DashBoard';
import { useForm } from 'react-hook-form';
import FormField from 'components/moleculs/FormField/FormField';
import { useAuth } from 'hooks/useAuth';

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

const UnauthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(auth.signIn)}
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
      autoComplete="off"
    >
      <FormField
        label="handleSignIn"
        name="login"
        id="login"
        {...register('login', {
          required: true,
        })}
        // {errors.login && <span>Password is required</span>}
      />
      <FormField
        label="password"
        name="password"
        id="password"
        type="password"
        {...register('password')}
        //  {errors.password && <span>Password is required</span>}
      />
      <button type="submit">Sign in</button>
    </form>
  );
};

const Root = () => {
  const auth = useAuth();
  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
