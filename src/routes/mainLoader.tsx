import { LoaderFunction, redirect } from 'react-router-dom';
import LocalStorage from '../util/LocalStorage';

const mainLoader: LoaderFunction = ({ request }): null | Response => {
  const { searchParams } = new URL(request.url);
  if (LocalStorage.has('searchTerm')) {
    searchParams.set('name', LocalStorage.get('searchTerm') as string);
  }
  if (!searchParams.has('page')) {
    searchParams.set('page', '1');
    return redirect(`/?${searchParams}`);
  }
  return null;
};

export default mainLoader;
