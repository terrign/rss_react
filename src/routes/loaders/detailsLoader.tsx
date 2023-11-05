// import { LoaderFunction } from 'react-router-dom';
// import api from '../../api/ApiClient';

// export interface SearchParams {
//   id: string;
//   search: string;
// }

// const detailsLoader: LoaderFunction = async ({ request, params }) => {
//   const paramsS = params as unknown as SearchParams;
//   const url = Object.fromEntries(new URL(request.url).searchParams);
//   console.log(url, paramsS);
//   return api.getStarships();
// };

// export default detailsLoader;
