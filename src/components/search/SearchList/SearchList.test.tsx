import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HttpResponse, http } from 'msw';
import SearchList from './SearchList';
import mainLoader from '../../../routes/mainLoader';
import SearchContextProvider from '../../../context/search/Search.provider';
import { emptyMockRes, mockRes } from '../../../test/mockedResponse';
import { server } from '../../../test/setup';

describe('SearchList component:', () => {
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

  test('List renders correct amount of items', async () => {
    const router = createMemoryRouter(routes);
    const { container } = render(<RouterProvider router={router} />);
    await waitFor(() => expect(container.getElementsByTagName('h3')).toHaveLength(mockRes.results.length));
  });

  test('Appropriate message is displayed if no cards are present', async () => {
    server.use(
      http.get('https://swapi.dev/api/starships/', () => {
        return HttpResponse.json(emptyMockRes);
      })
    );
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
    await waitFor(() => expect(screen.getByText('Nothing found')).toBeTruthy());
  });
});
