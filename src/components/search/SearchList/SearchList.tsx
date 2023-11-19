import SearchItem from '../SearchItem/SearchItem.tsx';
import styles from './SearchList.module.css';
import { Character } from '../../../models/apiTypes.ts';

export const SearchList = ({ items }: { items: Character[] }) => {
  return (
    <div className={styles.list}>
      {items.map((a) => (
        <SearchItem character={a} key={a.url} />
      ))}
    </div>
  );
};

export default SearchList;
