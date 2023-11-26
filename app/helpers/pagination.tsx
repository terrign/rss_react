import { Character, CharacterSearchparams } from "../models/apiTypes";

export const DEFAULT_RESPONSE_LENGTH = 20;

export const paginateData = (res: Character[], itemsPerPage: number, currentPage: number) => {
  if (itemsPerPage === DEFAULT_RESPONSE_LENGTH) {
    return res;
  }
  let result = [...res];
  const start = (currentPage - 1) % (DEFAULT_RESPONSE_LENGTH / itemsPerPage);
  result = result.splice(start * itemsPerPage, itemsPerPage);
  return result;
};

export const adaptPageParams = (search: CharacterSearchparams, itemsPerPage: number): CharacterSearchparams => {
  if (DEFAULT_RESPONSE_LENGTH === itemsPerPage) {
    return search;
  }
  const pageToFetch = Math.ceil(+search.page! / (DEFAULT_RESPONSE_LENGTH / itemsPerPage));
  return { ...search, page: pageToFetch };
};
