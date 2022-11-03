import React from 'react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { screen } from '@testing-library/react';
import { NewsSection } from './NewsSection';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const query = `
{
    allArticles {
      id
      title
      category
      content
  }
}
`;

describe('NewsSection', () => {
  let mock;
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('Displays error when the articles are not loaded correctly', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  it('Displayes the articles', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(201, {
      data: {
        allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
      },
    });
    renderWithProviders(<NewsSection />);
    // await screen.findByText(/Test/);
  });
});
