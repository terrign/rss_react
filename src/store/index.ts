import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './search.slice';
import paginationReducer from './pagination.slice';
import api from './api';

const reducer = combineReducers({
  search: searchReducer,
  pagination: paginationReducer,
  [api.reducerPath]: api.reducer,
});

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
