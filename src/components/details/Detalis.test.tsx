import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../../store';
import { routes } from '../../routes/mainRoutes';

describe('Detailed card component:', () => {
  test('Detailed card component correctly displays the detailed card data', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['?page=1&details=82'] });
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    await waitFor(() => expect(screen.getByText(`Cronenberg Rick`)).toBeInTheDocument());
  });

  test('Clicking the close button hides the component', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['?page=1&details=2'] });
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const button = await screen.findByTestId('closebutton');
    fireEvent.click(button);
    await waitFor(() => expect(screen.queryByTestId('closebutton')).toBeNull());
  });

  test('Clicking the background hides the component', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['?page=1&details=2'] });
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const black = await screen.findByTestId('blackout');
    fireEvent.click(black);
    await waitFor(() => expect(screen.queryByTestId('blackout')).toBeNull());
  });

  test('Pressing escape hides the component', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['?page=1&details=2'] });
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const black = await screen.findByTestId('blackout');
    fireEvent.keyDown(black, { key: 'Escape' });
    await waitFor(() => expect(screen.queryByTestId('blackout')).toBeNull());
  });
});
