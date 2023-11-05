import { useLoaderData, useSearchParams } from 'react-router-dom';
import { ShipsResponse } from '../../models/apiTypes';

const Pagination = () => {
  const data = useLoaderData() as ShipsResponse;
  const [, setSearch] = useSearchParams();

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

  return (
    <div style={{ display: 'flex', gap: 3, height: 30, marginTop: 20, cursor: 'pointer' }}>
      {getPageArray().map((a) => (
        <button type="button" key={a} onClick={() => onPageChange(a)}>
          {a}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
