import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import LocalStorage from '../util/LocalStorage';

export type PaginationState = {
  itemsPerPage: number;
};

const initialState: PaginationState = {
  itemsPerPage: Number(LocalStorage.get('itemsPerPage')) || 20,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setitemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export const { setitemsPerPage } = paginationSlice.actions;

const paginationReducer = paginationSlice.reducer;

export default paginationReducer;
