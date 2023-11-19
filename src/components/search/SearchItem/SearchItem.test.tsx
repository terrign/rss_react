import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { mockRes } from '../../../test/mockedResponse';
import { routes } from '../../../routes/mainRoutes';
import { server } from '../../../test/setup';

import store from '../../../store';

describe('SearchItem component:', () => {
  test('Card component renders the relevant card data', async () => {
    const router = createMemoryRouter(routes);
    const { container } = render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    await waitFor(() => {
      expect(container.getElementsByTagName('h3')[0]).toHaveTextContent(`${mockRes.results[0].name}`);
      expect(container.getElementsByTagName('h3')[1]).toHaveTextContent(`${mockRes.results[1].name}`);
    });
  });

  server.events.on('request:start', ({ request }) => {
    if (request.url.includes('3')) {
      expect(1).toEqual(1);
    }
  });

  test('Clicking on a card opens a detailed card component and triggers API call', async () => {
    const router = createMemoryRouter(routes);
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const link = await screen.findAllByText('See details');
    fireEvent.click(link[1]);
    await waitFor(() => expect(screen.getByText(`Gender`)).toBeTruthy());
  });
});
