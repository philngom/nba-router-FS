import {
  screen,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it("should load a list of characters, click on character will load character's page", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    screen.getByRole('heading', { name: /rick and morty characters/i });

    const loading = screen.getByText(/loading.../i);

    const link = await screen.findByRole('link', {
      name: /jerry smith/i,
    });

    userEvent.click(link);

    await screen.findByText(/loading character.../i);

    await screen.findByText(/jerry smith/i);
  });
});
