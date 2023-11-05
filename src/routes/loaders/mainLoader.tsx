import { LoaderFunction, redirect } from 'react-router-dom';
import api from '../../api/ApiClient';
import { ShipsResponse } from '../../models/apiTypes';

export interface SearchParams {
  id: string;
  search: string;
}

const mainLoader: LoaderFunction = async ({ request }): Promise<ShipsResponse | Response> => {
  const { searchParams } = new URL(request.url);
  if (!searchParams.has('page')) {
    searchParams.set('page', '1');
    return redirect(`/?${searchParams}`);
  }
  return api.getStarships(searchParams);
};

export default mainLoader;
