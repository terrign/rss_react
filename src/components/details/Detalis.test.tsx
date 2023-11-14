import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Details from './Details';
import detailsLoader from '../../routes/loaders/detailsLoader';

test('Detailed card component correctly displays the detailed card data', async () => {
  const routes = [
    {
      path: 'details/:shipId',
      element: <Details />,
      loader: detailsLoader,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ['/', '/details/3'],
    initialIndex: 1,
  });

  render(<RouterProvider router={router} />);

  await waitFor(() => expect(screen.getByText('name : Star Destroyer')).toBeTruthy());
});
