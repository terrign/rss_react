import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search.slice";
import paginationReducer from "./pagination.slice";
import { createWrapper } from "next-redux-wrapper";
import api from "./api";

const reducer = combineReducers({
  search: searchReducer,
  pagination: paginationReducer,
  [api.reducerPath]: api.reducer,
});

const makeStore = () =>
  configureStore({
    reducer,
    devTools: true,
    middleware: (gDM) => gDM().concat(api.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);
