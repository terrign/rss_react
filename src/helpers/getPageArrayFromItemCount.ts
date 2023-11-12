const getPageArrayFromItemCount = (count?: number) => {
  if (!count) return [];
  const pageCount = Math.ceil(count / 10);
  const pages = [];
  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(i);
  }
  return pages;
};

export default getPageArrayFromItemCount;
