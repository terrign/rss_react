import { useSearchParams } from 'react-router-dom';
import useSearchContext from '../../../context/search/useSearchContext';
import styles from './Pagination.module.css';
import getPageArrayFromItemCount from '../../../helpers/getPageArrayFromItemCount';

const Pagination = ({ children }: React.PropsWithChildren) => {
  const [search, setSearch] = useSearchParams();
  const { searchRes } = useSearchContext();

  const onPageChange = (pageNum: number) => {
    setSearch((prev) => {
      prev.set('page', String(pageNum));
      return prev;
    });
  };

  const isActive = (pageNum: number) => {
    return Number(search.get('page')) === pageNum ? '#43b362' : '#6b6b6b';
  };

  return (
    <div>
      {children}
      <div className={styles.pages}>
        {getPageArrayFromItemCount(searchRes?.count).map((a) => (
          <button
            style={{ backgroundColor: isActive(a), border: 'none' }}
            type="button"
            key={a}
            onClick={() => onPageChange(a)}
          >
            {a}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
