import { Outlet } from 'react-router-dom';
import SearchForm from '../components/search/SearchForm';
import SearchList from '../components/search/SearchList';
import Loader from '../components/Loader';
import Pagination from '../components/search/Pagination';
import SearchContextProvider from '../context/search/Search.provider';

const MainPage = () => {
  return (
    <SearchContextProvider>
      <SearchForm />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, gap: 10 }}>
        <Pagination>
          <SearchList />
        </Pagination>
        <Outlet />
      </div>
      <Loader />
    </SearchContextProvider>
  );
};
export default MainPage;
