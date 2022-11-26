import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'hooks/useAuth';
import { ErrorProvider } from 'hooks/useError';
import { NotesProvider } from 'hooks/useNote';

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NotesProvider>
          <ErrorProvider>
            <AuthProvider>
              <GlobalStyle />
              {children}
            </AuthProvider>
          </ErrorProvider>
        </NotesProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
