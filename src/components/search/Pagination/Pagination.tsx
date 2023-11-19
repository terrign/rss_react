import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setitemsPerPage } from '../../../store/pagination.slice';
import api from '../../../store/api';
import Loader from '../../loader/Loader';
import SearchList from '../SearchList/SearchList';
import PagePicker from './PagePicker';
import LocalStorage from '../../../util/LocalStorage';
import usePagination from '../../../hooks/usePagination';
import styles from './Pagination.module.css';

const Pagination = () => {
  const [search, setSearch] = useSearchParams();
  const itemsPerPage = useAppSelector((state) => state.pagination.itemsPerPage);
  const dispatch = useAppDispatch();
  const { adaptPageParams, paginateData } = usePagination({
    currentPage: Number(search.get('page')),
    search,
    itemsPerPage,
  });
  const { isLoading, isUninitialized, data, isError } = api.useListQuery(adaptPageParams());

  const onItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setitemsPerPage(Number(event.target.value)));
    LocalStorage.set('itemsPerPage', event.target.value);
    setSearch((prev) => {
      prev.set('page', '1');
      return prev;
    });
  };

  if (isLoading || isUninitialized) {
    return <Loader />;
  }

  if (isError) {
    return <p>Nothing found</p>;
  }

  return (
    <div>
      <SearchList items={paginateData(data.results)} />
      <div className={styles.paginationContainer}>
        <PagePicker totalCount={data.info.count} />
        <label htmlFor="select" style={{ height: 30 }}>
          Items per Page:
          <select
            id="select"
            data-testid="select"
            defaultValue={itemsPerPage}
            style={{ marginLeft: 5, height: 30, width: 50 }}
            onChange={onItemsPerPageChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Pagination;
