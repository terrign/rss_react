import { Outlet } from 'react-router-dom';
import SearchForm from '../components/search/SearchForm';
import SearchList from '../components/search/SearchList';

const MainPage = () => {
  return (
    <>
      <SearchForm />
      <div>
        <SearchList />
        <Outlet />
      </div>
    </>
  );
};
export default MainPage;
