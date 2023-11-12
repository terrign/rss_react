import { Link, useNavigation, useSearchParams } from 'react-router-dom';
import styles from './SearchList.module.css';

import getIdFromUrl from '../../helpers/getIdFromUrl.ts';
import useSearchContext from '../../context/search/useSearchContext.tsx';

export const SearchList = () => {
  const [search] = useSearchParams();
  const nav = useNavigation();
  const { searchRes } = useSearchContext();

  const renderItems = () => {
    if (nav.state === 'idle' && (searchRes?.results.length ?? 0) === 0) {
      return <p>Nothing found</p>;
    }
    return searchRes?.results.map((a) => (
      <div key={a.name} className={styles.listItem}>
        <h3>Name: {a.name}</h3>
        <h4>Model: {a.model}</h4>
        <Link
          to={{ pathname: `details/${getIdFromUrl(a.url)}`, search: search.toString() }}
          style={{ marginTop: 'auto' }}
        >
          See details
        </Link>
      </div>
    ));
  };

  return <div className={styles.list}>{renderItems()}</div>;
};

export default SearchList;
