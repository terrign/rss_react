import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ErrorThrower from '../ErrorThrower';
import LocalStorage from '../../util/LocalStorage';
import styles from './Search.module.css';

const SearchForm = () => {
  const nav = useNavigate();
  const [inputValue, setInputValue] = useState<string>(LocalStorage.get('searchTerm') as string);

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    nav(`/?search=${inputValue}&page=1`);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setInputValue(value);
    LocalStorage.set('searchTerm', value);
  };

  return (
    <form onSubmit={onSubmit} className={styles.searchForm}>
      <input type="text" value={inputValue} onChange={onChange} />
      <Link to={`/?search=${inputValue}&page=1`} className={styles.searchButton}>
        Search
      </Link>
      <ErrorThrower />
    </form>
  );
};

export default SearchForm;
