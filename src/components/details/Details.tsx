import { useSearchParams } from 'react-router-dom';
import styles from './Details.module.css';
import api from '../../store/api';
import Loader from '../loader/Loader';

const Details = ({ id }: { id: number }) => {
  const [, setSearch] = useSearchParams();

  const { isLoading, isUninitialized, data, isError } = api.useDetailsQuery({ id });

  const onClose = () => {
    setSearch((prev) => {
      prev.delete('details');
      return prev;
    });
  };

  if (isLoading || isUninitialized) {
    return <Loader />;
  }

  if (isError) {
    return null;
  }

  return (
    <div className={styles.blackout}>
      <div className={styles.details}>
        <button type="button" onClick={onClose} style={{ marginLeft: 'auto', width: 30, display: 'block' }}>
          X
        </button>
        {Object.keys(data!).map((a) => {
          return <p key={a}>{`${a} : ${data[a as keyof typeof data]}`}</p>;
        })}
      </div>
    </div>
  );
};

export default Details;
