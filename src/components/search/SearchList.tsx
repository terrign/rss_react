import { useLoaderData, useNavigation } from 'react-router-dom';
import { ShipsResponse } from '../../models/apiTypes.ts';
import styles from './SearchList.module.css';
import Loader from '../Loader.tsx';

export const SearchList = () => {
  const nav = useNavigation();
  const data = useLoaderData() as ShipsResponse;

  const renderItems = () => {
    if (nav.state === 'loading') {
      return <Loader />;
    }
    if (nav.state === 'idle' && (data.results?.length ?? 0) === 0) {
      return <p>Nothing found</p>;
    }
    return data.results?.map((a) => (
      <div key={a.name} className={styles.listItem}>
        <h3>Name: {a.name}</h3>
        <h4>Model: {a.model}</h4>
        <p>Class: {a.starship_class}</p>
        <p>Cargo capacity: {a.cargo_capacity}</p>
      </div>
    ));
  };

  return <div className={styles.list}>{renderItems()}</div>;
};

export default SearchList;
