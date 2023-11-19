import { Character, CharacterSearchparams } from '../models/apiTypes';

export const DEFAULT_RESPONSE_LENGTH = 20;

interface PaginationHookParams {
  currentPage: number;
  itemsPerPage: number;
  search: URLSearchParams;
}

interface PaginationHook {
  (params: PaginationHookParams): {
    adaptPageParams: () => CharacterSearchparams;
    paginateData: (res: Character[]) => Character[];
  };
}

const usePagination: PaginationHook = ({ currentPage, itemsPerPage, search }) => {
  const paginateData = (res: Character[]) => {
    if (itemsPerPage === DEFAULT_RESPONSE_LENGTH) {
      return res;
    }
    let result = [...res];
    const start = (currentPage - 1) % (DEFAULT_RESPONSE_LENGTH / itemsPerPage);
    result = result.splice(start * itemsPerPage, itemsPerPage);
    return result;
  };

  const adaptPageParams = (): CharacterSearchparams => {
    const params = Object.fromEntries(search) as CharacterSearchparams;
    if (DEFAULT_RESPONSE_LENGTH === itemsPerPage) {
      return params;
    }
    const pageToFetch = Math.ceil(+params.page! / (DEFAULT_RESPONSE_LENGTH / itemsPerPage));
    return { ...params, page: pageToFetch };
  };

  return { adaptPageParams, paginateData };
};

export default usePagination;
