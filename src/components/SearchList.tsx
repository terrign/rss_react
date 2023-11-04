import { Starship } from '../models/apiTypes.ts';
import styles from './SearchList.module.css';
import Loader from './Loader.tsx';

interface SearchListProps {
  items: Starship[];
  loading: boolean;
}

const SearchList = ({ items, loading }: SearchListProps) => {
  const renderItems = () => {
    if (loading) {
      return <Loader />;
    }
    if (!loading && items.length === 0) {
      return <p>Nothing found</p>;
    }
    return items.map((a) => (
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
