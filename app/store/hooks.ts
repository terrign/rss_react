import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '.';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePageSelector = () => useAppSelector((state) => state.pagination);
export const useSearchSelector = () => useAppSelector((state) => state.search);
