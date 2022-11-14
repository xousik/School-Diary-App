import React from 'react';
import { render, screen } from 'test-utils';
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
    render(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  it('Displayes the articles', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
      },
    });
    render(<NewsSection />);
    await screen.findByText(/Test/);
  });
});
