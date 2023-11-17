import { Link, useSearchParams } from 'react-router-dom';
import { Starship } from '../../../models/apiTypes';
import getIdFromUrl from '../../../helpers/getIdFromUrl';
import styles from '../SearchList/SearchList.module.css';

const SearchItem = ({ ship }: { ship: Starship }) => {
  const [search] = useSearchParams();
  return (
    <div className={styles.listItem}>
      <h3>Name: {ship.name}</h3>
      <h4>Model: {ship.model}</h4>
      <Link
        to={{ pathname: `details/${getIdFromUrl(ship.url)}`, search: search.toString() }}
        style={{ marginTop: 'auto' }}
      >
        See details
      </Link>
    </div>
  );
};

export default SearchItem;
