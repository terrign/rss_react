import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { routes } from '../../../routes/mainRoutes';
import store from '../../../store';

describe('SearchForm component:', () => {
  test('Saves the entered value to the local storage', async () => {
    const router = createMemoryRouter(routes);
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const input = (await screen.findByPlaceholderText('Character name')) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    const form = await screen.findByTestId('form');
    fireEvent.submit(form);
    expect(localStorage.getItem('searchTerm')).toEqual('test');
    localStorage.clear();
  });

  test('Component retrieves the value from the local storage upon mounting', async () => {
    localStorage.setItem('searchTerm', 'test');
    const router = createMemoryRouter(routes);
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    const input = await screen.findByPlaceholderText('Character name');
    expect((input as HTMLInputElement).value).toEqual('test');
  });
});
