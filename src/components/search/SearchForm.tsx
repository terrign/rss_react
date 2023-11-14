import { Link, useNavigate } from 'react-router-dom';
import ErrorThrower from '../ErrorThrower';
import LocalStorage from '../../util/LocalStorage';
import styles from './Search.module.css';
import useSearchContext from '../../context/search/useSearchContext';

const SearchForm = () => {
  const nav = useNavigate();
  const { searchTerm, setSearchTerm } = useSearchContext();

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (searchTerm) {
      nav(`/?search=${searchTerm}&page=1`);
    }
    nav(`/?page=1`);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setSearchTerm(value);
    LocalStorage.set('searchTerm', value);
  };

  return (
    <form onSubmit={onSubmit} className={styles.searchForm}>
      <input type="text" value={searchTerm ?? undefined} onChange={onChange} placeholder="Ship name" />
      <Link to={`/?search=${searchTerm}&page=1`} className={styles.searchButton}>
        Search
      </Link>
      <ErrorThrower />
    </form>
  );
};

export default SearchForm;
