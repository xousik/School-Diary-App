import React from 'react';
import AddUser from './AddUser';
import Dashboard from './DashBoard';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { screen, fireEvent } from '@testing-library/react';

describe('Add User', () => {
  it('Filling the inputs', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Wojtek' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '50%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.1' } });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Wojtek');
  });
});
