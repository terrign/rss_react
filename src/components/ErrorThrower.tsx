import { useState } from 'react';

const ErrorThrower = () => {
  const [error, setError] = useState<boolean>(false);

  const throwError = () => {
    throw new Error('Test Error');
  };

  return (
    <>
      <button type="button" onClick={() => setError(true)}>
        Error
      </button>
      {error && throwError()}
    </>
  );
};

export default ErrorThrower;
