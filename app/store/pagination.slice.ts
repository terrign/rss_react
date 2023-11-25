import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PaginationState = {
  itemsPerPage: number;
};

const initialState: PaginationState = {
  itemsPerPage: 20,
};

export const paginationSlice = createSlice({
  name: "pagination",
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
