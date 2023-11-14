import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import SearchList from './SearchList';
import mainLoader from '../../routes/loaders/mainLoader';
import SearchContextProvider from '../../context/search/Search.provider';
import { mockRes } from '../../test/mockedResponse';

describe('SearchItem component:', () => {
  const routes = [
    {
      path: '/',
      element: (
        <SearchContextProvider>
          <SearchList />
        </SearchContextProvider>
      ),
      loader: mainLoader,
    },
  ];

  test('Card component renders the relevant card data', async () => {
    const router = createMemoryRouter(routes);
    const { container } = render(<RouterProvider router={router} />);
    await waitFor(() => {
      expect(container.getElementsByTagName('h3')[0]).toHaveTextContent(`Name: ${mockRes.results[0].name}`);
      expect(container.getElementsByTagName('h3')[1]).toHaveTextContent(`Name: ${mockRes.results[1].name}`);
    });
  });
});
