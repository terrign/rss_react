import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './search.slice';
import { createWrapper } from 'next-redux-wrapper';
import api from './api';

const reducer = combineReducers({
  search: searchReducer,
  [api.reducerPath]: api.reducer,
});

const makeStore = () =>
  configureStore({
    reducer,
    devTools: true,
    middleware: (gDM) => gDM().concat(api.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const store = configureStore({
  reducer,
  devTools: true,
  middleware: (gDM) => gDM().concat(api.middleware),
});

export const wrapper = createWrapper<AppStore>(makeStore);
