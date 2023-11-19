import { render, waitFor } from '@testing-library/react';
import Loader from './Loader';

test('Loader renders', async () => {
  const { container } = render(<Loader />);
  await waitFor(() => expect(container).toBeInTheDocument());
});
