import React, { useEffect, useRef, useState } from 'react';
import api from '../api/ApiClient.ts';
import { Starship } from '../models/apiTypes.ts';
import SearchList from './SearchList.tsx';
import LocalStorage from '../util/LocalStorage.ts';
import styles from './Search.module.css';
import ErrorThrower from './ErrorThrower.tsx';

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<Starship[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSearch = async () => {
    setIsLoading(true);
    const res = await api.getStarships(inputRef.current?.value);
    setItems(res.results);
    setIsLoading(false);
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
    onSearch();
  }, []);

  return (
    <>
      <form onSubmit={onSubmit} className={styles.searchForm}>
        <input type="text" ref={inputRef} />
        <button type="button" onClick={onSearch}>
          Search
        </button>
        <ErrorThrower />
      </form>
      <SearchList items={items} loading={isLoading} />
    </>
  );
};

export default Search;
