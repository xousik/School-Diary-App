import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils';
import Root from './Root';

describe('Root component', () => {
  it('Renders the component as unauthenticated user', () => {
    render(<Root />);
    screen.getByLabelText('login');
  });
  it('Display error message when wrong credentials are passed', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'teacher@studybuddy.com' } });
    fireEvent.change(password, { target: { value: 'Elo' } });

    fireEvent.click(screen.getByText('Sign in'));

    await screen.findByText(/Oops/);

    // expect(await screen.findByText(/Oops/)).toBeVisible();
  });
});
