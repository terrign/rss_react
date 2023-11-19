import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { mockRes } from '../../../test/mockedResponse';
import { routes } from '../../../routes/mainRoutes';
import store from '../../../store';

describe('SearchList component:', () => {
  test('List renders correct amount of items', async () => {
    const router = createMemoryRouter(routes);
    const { container } = render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    await waitFor(() => expect(container.getElementsByTagName('h3')).toHaveLength(mockRes.results.length));
  });
});
