import { expect, test } from 'vitest';
import getIdFromUrl from './getIdFromUrl';

test('Should return correct id', () => {
  expect(getIdFromUrl('https://swapi.dev/api//starships/75')).toBe(75);
  expect(getIdFromUrl('https://swapi.dev/api//starships/1')).toBe(1);
  expect(getIdFromUrl('https://swapi.dev/api//starships/1234123')).toBe(1234123);
  expect(getIdFromUrl('https://swapi.dev/api//starships/3')).toBe(3);
  expect(getIdFromUrl('https://swapi.dev/api//starships/5')).toBe(5);
});
