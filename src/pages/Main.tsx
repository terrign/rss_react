import { Outlet, useSearchParams } from 'react-router-dom';
import SearchForm from '../components/search/SearchForm/SearchForm';
import Pagination from '../components/search/Pagination/Pagination';
import Details from '../components/details/Details';

const MainPage = () => {
  const [search] = useSearchParams();
  return (
    <>
      <SearchForm />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, gap: 10 }}>
        <Pagination />
        <Outlet />
      </div>
      {search.has('details') && <Details id={Number(search.get('details'))} />}
    </>
  );
};
export default MainPage;
