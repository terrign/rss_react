import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Details from './Details';
import detailsLoader from '../../routes/loaders/detailsLoader';

describe('Detailed card component:', () => {
  const routes = [
    {
      path: 'details/:shipId',
      element: <Details />,
      loader: detailsLoader,
    },
    {
      path: '/',
      element: <div />,
    },
  ];

  test('Detailed card component correctly displays the detailed card data', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/details/3'],
      initialIndex: 0,
    });
    render(<RouterProvider router={router} />);
    await waitFor(() => expect(screen.getByText(`starship_class : Star Destroyer`)).toBeTruthy());
  });

  test('Clicking the close button hides the component', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/details/3'],
      initialIndex: 0,
    });
    render(<RouterProvider router={router} />);
    const button = await screen.findByText('Close');
    fireEvent.click(button);
    await waitFor(() => expect(button).not.toBeInTheDocument());
  });
});
