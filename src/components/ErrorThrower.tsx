import { useState } from 'react';
import styles from './ErrorThrower.module.css';

const ErrorThrower = () => {
  const [error, setError] = useState<boolean>(false);

  const throwError = () => {
    throw new Error('Test Error');
  };

  return (
    <>
      <button type="button" onClick={() => setError(true)} className={styles.errorButton}>
        Error
      </button>
      {error && throwError()}
    </>
  );
};

export default ErrorThrower;
