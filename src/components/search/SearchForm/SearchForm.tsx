import { useSearchParams } from 'react-router-dom';
import LocalStorage from '../../../util/LocalStorage';
import styles from '../Search.module.css';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { searchSlice } from '../../../store/search.slice';

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const term = useAppSelector((state) => state.search.searchTerm);

  const [, setSearch] = useSearchParams();

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setSearch((prev) => {
      if (term) {
        prev.set('name', term);
        prev.set('page', '1');
        LocalStorage.set('searchTerm', term);
      } else {
        prev.delete('name');
      }
      return prev;
    });
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    dispatch(searchSlice.actions.searchTerm(value));
  };

  return (
    <form onSubmit={onSubmit} className={styles.searchForm} data-testid="form">
      <input type="text" value={term ?? undefined} onChange={onChange} placeholder="Character name" id="searchInput" />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
