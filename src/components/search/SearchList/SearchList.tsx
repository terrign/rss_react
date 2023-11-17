import { useNavigation } from 'react-router-dom';
import styles from './SearchList.module.css';
import useSearchContext from '../../../context/search/useSearchContext.tsx';
import SearchItem from '../SearchItem/SearchItem.tsx';
// import api from '../../../store/api.ts';

export const SearchList = () => {
  const nav = useNavigation();
  const { searchRes } = useSearchContext();

  // const { isLoading, isUninitialized, data, isFetching } = api.useListQuery({});

  const renderItems = () => {
    if (nav.state === 'idle' && (searchRes?.results.length ?? 0) === 0) {
      return <p>Nothing found</p>;
    }
    return searchRes?.results.map((a) => <SearchItem ship={a} key={a.name} />);
  };

  return <div className={styles.list}>{renderItems()}</div>;
};

export default SearchList;