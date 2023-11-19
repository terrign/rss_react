import { Provider } from 'react-redux';
import { render, waitFor } from '@testing-library/react';
import App from './App';
import store from './store';

test('App renders', async () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  await waitFor(() => expect(container).toBeInTheDocument());
});
