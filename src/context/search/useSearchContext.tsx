import { useContext } from 'react';
import SearchContext from './Search.context';

const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearchContext has to be used within <SearchContext.Provider>');
  }

  return context;
};

export default useSearchContext;
