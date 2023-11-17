import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type PaginationState = {
  page: number;
  pageCount: number;
  itemsPerPage: number;
};

const initialState: PaginationState = {
  page: 1,
  pageCount: 0,
  itemsPerPage: 20,
};

export const paginationSlice = createSlice({
  name: 'pagintation',
  initialState,
  reducers: {
    page: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    prev: (state) => {
      state.page -= 1;
    },
    next: (state) => {
      state.page += 1;
    },
    pageCount: (state, action: PayloadAction<number>) => {
      state.pageCount = action.payload;
    },
    itemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export const { page, pageCount, itemsPerPage, prev, next } = paginationSlice.actions;

const paginationReducer = paginationSlice.reducer;

export default paginationReducer;
