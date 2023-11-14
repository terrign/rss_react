import { createContext } from 'react';
import { ShipsResponse } from '../../models/apiTypes';

export interface SearchContextType {
  searchTerm: string | null;
  searchRes: ShipsResponse | null;
  setSearchTerm: React.Dispatch<React.SetStateAction<string | null>>;
  setSearchRes: React.Dispatch<React.SetStateAction<ShipsResponse | null>>;
}

const SearchContext = createContext<SearchContextType | null>(null);

export default SearchContext;
