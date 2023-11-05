import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import { Starship } from '../../models/apiTypes';
import styles from './Details.module.css';

const Details = () => {
  const data = useLoaderData() as Starship;
  const [search] = useSearchParams();

  const renderDetails = () => {
    return Object.keys(data).map((a) => {
      return <p key={a}>{`${a} : ${data[a as keyof typeof data]}`}</p>;
    });
  };

  return (
    <div className={styles.details}>
      <Link to={{ pathname: `../..`, search: search.toString() }} relative="path">
        Close
      </Link>
      {renderDetails()}
    </div>
  );
};

export default Details;
