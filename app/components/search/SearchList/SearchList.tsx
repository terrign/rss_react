import SearchItem from "../SearchItem/SearchItem";
import styles from "./SearchList.module.css";
import { Character } from "../../../models/apiTypes";

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
