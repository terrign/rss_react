import { Link, useLoaderData, useNavigation, useSearchParams } from 'react-router-dom';
import { ShipsResponse } from '../../models/apiTypes.ts';
import styles from './SearchList.module.css';

import getIdFromUrl from '../../helpers/getIdFromUrl.ts';

export const SearchList = () => {
  const data = useLoaderData() as ShipsResponse;
  const [search] = useSearchParams();
  const nav = useNavigation();

  const renderItems = () => {
    if (nav.state === 'idle' && (data.results?.length ?? 0) === 0) {
      return <p>Nothing found</p>;
    }
    return data.results?.map((a) => (
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
