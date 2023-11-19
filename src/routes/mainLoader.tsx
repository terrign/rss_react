import { LoaderFunction, redirect } from 'react-router-dom';

const mainLoader: LoaderFunction = ({ request }): null | Response => {
  const { searchParams } = new URL(request.url);
  if (!searchParams.has('page')) {
    searchParams.set('page', '1');
    return redirect(`/?${searchParams}`);
  }
  return null;
};

export default mainLoader;
