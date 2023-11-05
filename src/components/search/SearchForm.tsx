import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import ErrorThrower from '../ErrorThrower';
import LocalStorage from '../../util/LocalStorage';
import styles from './Search.module.css';

const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [, setSearchParams] = useSearchParams();

  const onSearch = () => {
    setSearchParams((prev) => {
      const newValue = inputRef.current?.value as string;
      if (newValue) {
        prev.set('search', newValue);
      } else {
        prev.delete('search');
      }
      return prev;
    });
    LocalStorage.set('searchTerm', inputRef.current?.value as string);
  };

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    onSearch();
  };

  useEffect(() => {
    if (LocalStorage.has('searchTerm')) {
      inputRef.current!.value = LocalStorage.get('searchTerm') as string;
    }
  }, []);

  return (
    <form onSubmit={onSubmit} className={styles.searchForm}>
      <input type="text" ref={inputRef} />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      <ErrorThrower />
    </form>
  );
};

export default SearchForm;
