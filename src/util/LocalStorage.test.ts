import '@testing-library/jest-dom';
import LocalStorage from './LocalStorage';

describe('LocalStorage class: ', () => {
  test('Add item', () => {
    LocalStorage.set('a', 'b');
    expect(localStorage.getItem('a')).toEqual('b');
  });

  test('Check item', () => {
    localStorage.setItem('a', 'b');
    expect(LocalStorage.has('a')).toEqual(true);
  });

  test('Get item', () => {
    localStorage.setItem('a', 'b');
    expect(LocalStorage.get('a')).toEqual('b');
  });

  test('Delete item', () => {
    localStorage.setItem('a', 'b');
    expect(localStorage.getItem('a')).toEqual('b');
    LocalStorage.del('a');
    expect(LocalStorage.has('a')).toEqual(false);
  });
});
