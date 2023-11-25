function paginate(current: number | null, max: number): number[] {
  if (!current || !max) return [];
  const [firstPage, lastPage] = [1, max];
  let result: number[] = [];

  if (lastPage <= 6) {
    const array = new Array(lastPage);
    array.fill(1);
    return array.map((_, i) => i + 1);
  }

  if (current <= 4) {
    result = [1, 2, 3, 4, 5, NaN, max];
  } else if (current <= lastPage - 4) {
    result = [firstPage, NaN, current - 2, current - 1, current, current + 1, current + 2, NaN, lastPage];
  } else {
    result = [firstPage, NaN, lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1, lastPage];
  }

  return result;
}

export default paginate;
