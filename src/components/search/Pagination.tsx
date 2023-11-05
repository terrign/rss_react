import { useLoaderData, useSearchParams } from 'react-router-dom';
import { ShipsResponse } from '../../models/apiTypes';

const Pagination = () => {
  const data = useLoaderData() as ShipsResponse;
  const [search, setSearch] = useSearchParams();

  const getPageArray = () => {
    const pageCount = Math.ceil(data.count / 10);
    const pages = [];
    for (let i = 1; i <= pageCount; i += 1) {
      pages.push(i);
    }
    return pages;
  };

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
    <div style={{ display: 'flex', gap: 3, height: 30, marginTop: 20, cursor: 'pointer' }}>
      {getPageArray().map((a) => (
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
  );
};

export default Pagination;
