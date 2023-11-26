'use client';
import { PropsWithChildren, useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { searchSlice } from '../store/search.slice';
import Cookie from '../util/Cookie';

const StoreInitializer = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const term = localStorage.getItem('searchTerm');

      const itemsPerPage = Cookie.get('itemsPerPage');

      if (!itemsPerPage) {
        Cookie.set('itemsPerPage', '20');
      }

      if (term) {
        dispatch(searchSlice.actions.searchTerm(term));
      }
    }
  }, [dispatch]);

  return children;
};

export default StoreInitializer;
