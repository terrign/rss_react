import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { routes } from '../../../routes/mainRoutes';
import store from '../../../store';

describe('Pagination component:', () => {
  test('Saves itemsPerPage to the store', async () => {
    const router = createMemoryRouter(routes);
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const select = await screen.findByTestId('select');
    fireEvent.change(select, { target: { value: 10 } });
    expect(store.getState().pagination.itemsPerPage).toEqual(10);
  });
});
