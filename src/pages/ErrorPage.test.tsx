import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { routes } from '../routes/mainRoutes';

describe('404 page:', () => {
  test('404 page is displayed when navigating to an invalid route', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/randomPath'] });
    render(<RouterProvider router={router} />);
    await waitFor(() => {
      expect(screen.getByText('Sorry, an unexpected error has occurred.')).toBeTruthy();
    });
  });

  test('404 page is not displayed when navigating to a valid route', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);
    await waitFor(() => {
      expect(screen.queryByText('Sorry, an unexpected error has occurred.')).toBeFalsy();
    });
  });
});
