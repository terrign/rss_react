import { useState, useMemo, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import SearchContext, { SearchContextType } from './Search.context';
import LocalStorage from '../../util/LocalStorage';
import { ShipsResponse } from '../../models/apiTypes';

const SearchContextProvider = (props: React.PropsWithChildren) => {
  const [searchRes, setSearchRes] = useState<SearchContextType['searchRes']>(null);
  const [searchTerm, setSearchTerm] = useState<SearchContextType['searchTerm']>(LocalStorage.get('searchTerm'));
  const data = useLoaderData() as ShipsResponse;

  useEffect(() => {
    setSearchRes(data);
  }, [data]);

  const contextValue = useMemo<SearchContextType>(
    () => ({
      searchRes,
      searchTerm,
      setSearchRes,
      setSearchTerm,
    }),
    [searchRes, searchTerm]
  );
  return <SearchContext.Provider value={contextValue}>{props.children}</SearchContext.Provider>;
};

export default SearchContextProvider;
