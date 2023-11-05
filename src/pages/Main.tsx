import { Outlet } from 'react-router-dom';
import SearchForm from '../components/search/SearchForm';
import SearchList from '../components/search/SearchList';
import Loader from '../components/Loader';
import Pagination from '../components/search/Pagination';

const MainPage = () => {
  return (
    <>
      <SearchForm />
      <Pagination />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, gap: 10 }}>
        <SearchList />
        <Outlet />
      </div>
      <Loader />
    </>
  );
};
export default MainPage;
