import { expect, test } from 'vitest';
import getPageArrayFromItemCount from './getPageArrayFromItemCount';

test('Should return correct pages', () => {
  expect(getPageArrayFromItemCount(86)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(getPageArrayFromItemCount(1)).toEqual([1]);
  expect(getPageArrayFromItemCount(0)).toEqual([]);
  expect(getPageArrayFromItemCount(50)).toEqual([1, 2, 3, 4, 5]);
});
