import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import styles from './Pagination.module.css';
import paginate from '../../../helpers/paginate';

interface PagePickerProps {
  totalCount: number;
}

const PagePicker = ({ totalCount }: PagePickerProps) => {
  const { itemsPerPage } = useAppSelector((state) => state.pagination);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useSearchParams();
  const currentPage = Number(search.get('page'));
  const isActive = (pageNum: number) => {
    return currentPage === pageNum ? '#43b362' : '#6b6b6b';
  };

  useEffect(() => {
    setTotalPages(Math.ceil(totalCount / itemsPerPage));
  }, [totalCount, itemsPerPage]);

  const onPageChange = (pageNum: number) => {
    if (pageNum === 0 || pageNum > totalPages) {
      return;
    }
    setSearch((prev) => {
      prev.set('page', String(pageNum));
      return prev;
    });
  };

  const isDisabled = (value: number) => {
    if (value === 0 || value > totalPages || currentPage === value || totalPages === 1) {
      return true;
    }
    return false;
  };

  return (
    <div className={styles.pages}>
      <button type="button" onClick={() => onPageChange(currentPage - 1)} disabled={isDisabled(currentPage - 1)}>
        {'<'}
      </button>
      {paginate(currentPage, totalPages).map((a) => {
        if (!a) {
          return (
            <div style={{ width: 30, height: 30, textAlign: 'center', lineHeight: '45px' }} key={Math.random()}>
              . . .
            </div>
          );
        }
        return (
          <button
            style={{ backgroundColor: isActive(a), border: 'none' }}
            type="button"
            key={a + Math.random()}
            onClick={() => onPageChange(a)}
            disabled={isDisabled(a)}
          >
            {a}
          </button>
        );
      })}
      <button type="button" onClick={() => onPageChange(currentPage + 1)} disabled={isDisabled(currentPage + 1)}>
        {'>'}
      </button>
    </div>
  );
};

export default PagePicker;
