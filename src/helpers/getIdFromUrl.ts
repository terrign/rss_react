const getIdFromUrl = (url: string): number => {
  return +url
    .split('')
    .filter((a) => !Number.isNaN(+a))
    .join('');
};

export default getIdFromUrl;
