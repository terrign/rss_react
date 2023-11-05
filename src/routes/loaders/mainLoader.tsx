import { LoaderFunction } from 'react-router-dom';
import api from '../../api/ApiClient';
import { ShipsResponse } from '../../models/apiTypes';

export interface SearchParams {
  id: string;
  search: string;
}

const mainLoader: LoaderFunction = async ({ request }): Promise<ShipsResponse> => {
  const url = Object.fromEntries(new URL(request.url).searchParams);
  return api.getStarships(new URLSearchParams(url));
};

export default mainLoader;
