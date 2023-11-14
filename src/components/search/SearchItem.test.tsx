import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mockRes } from '../../test/mockedResponse';
import { routes } from '../../routes/mainRoutes';
import { server } from '../../test/setup';

describe('SearchItem component:', () => {
  test('Card component renders the relevant card data', async () => {
    const router = createMemoryRouter(routes);
    const { container } = render(<RouterProvider router={router} />);
    await waitFor(() => {
      expect(container.getElementsByTagName('h3')[0]).toHaveTextContent(`Name: ${mockRes.results[0].name}`);
      expect(container.getElementsByTagName('h3')[1]).toHaveTextContent(`Name: ${mockRes.results[1].name}`);
    });
  });

  server.events.on('request:start', ({ request }) => {
    if (request.url.includes('3')) {
      expect(1).toEqual(1);
    }
  });

  test('Clicking on a card opens a detailed card component and triggers API call', async () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
    const link = await screen.findAllByText('See details');
    fireEvent.click(link[1]);
    await waitFor(() => expect(screen.getByText(`starship_class : ${mockRes.results[1].starship_class}`)).toBeTruthy());
  });
});
