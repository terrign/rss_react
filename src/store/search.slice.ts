import { createSlice } from '@reduxjs/toolkit';
import LocalStorage from '../util/LocalStorage';
import { Character } from '../models/apiTypes';

export type SearchState = {
  searchTerm: string | null;
  searchRes: Character[];
};

const initialState: SearchState = {
  searchTerm: LocalStorage.get('searchTerm'),
  searchRes: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    searchRes: (state, action) => {
      state.searchRes = action.payload;
    },
  },
});

export const { searchTerm, searchRes } = searchSlice.actions;

const searchReducer = searchSlice.reducer;

export default searchReducer;
