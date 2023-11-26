import api from '../../../store/api';
import Loader from '../../loader/Loader';
import SearchList from '../SearchList/SearchList';
import PagePicker from './PagePicker';
import styles from './Pagination.module.css';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { adaptPageParams, paginateData } from '../../../helpers/pagination';
import { CharacterSearchparams } from '../../../models/apiTypes';
import Cookie from '../../../util/Cookie';

const Pagination = ({ itemsPerPage }: { itemsPerPage: number }) => {
  const search = useSearchParams()!;
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = Number(search.get('page'));
  const { isLoading, isUninitialized, data, isError } = api.useListQuery(
    adaptPageParams(Object.fromEntries(search) as CharacterSearchparams, itemsPerPage)
  );

  const onItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    Cookie.set('itemsPerPage', event.target.value);
    const newSearch = new URLSearchParams(search);
    newSearch.set('page', '1');
    router.push(`${pathname}?${newSearch}`);
  };

  if (isLoading || isUninitialized) {
    return <Loader />;
  }

  if (isError) {
    return <p>Nothing found</p>;
  }

  return (
    <div>
      <SearchList items={paginateData(data.results, itemsPerPage, currentPage)} />
      <div className={styles.paginationContainer}>
        <PagePicker totalCount={data.info.count} itemsPerPage={itemsPerPage} />
        <label htmlFor="select" style={{ height: 30 }}>
          Items per Page:
          <select
            id="select"
            data-testid="select"
            value={itemsPerPage}
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
