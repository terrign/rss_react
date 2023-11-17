import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { routes } from '../../../routes/mainRoutes';

describe('SearchForm component:', () => {
  test('Saves the entered value to the local storage', async () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
    const input = await screen.findByPlaceholderText('Ship name');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(localStorage.getItem('searchTerm')).toEqual('test');
  });

  test('Component retrieves the value from the local storage upon mounting', async () => {
    const router = createMemoryRouter(routes);
    localStorage.setItem('searchTerm', 'testValue');
    render(<RouterProvider router={router} />);
    const input = await screen.findByPlaceholderText('Ship name');
    expect((input as HTMLInputElement).value).toEqual('testValue');
  });
});
