import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/Main';
import ErrorPage from '../pages/ErrorPage';
import mainLoader from './loaders/mainLoader';
import detailsLoader from './loaders/detailsLoader';
import Details from '../components/details/Details';

const mainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    loader: mainLoader,
    shouldRevalidate: ({ currentUrl, nextUrl }) => {
      return currentUrl.search !== nextUrl.search;
    },
    children: [
      {
        path: 'details/:shipId',
        index: true,
        element: <Details />,
        errorElement: <ErrorPage />,
        loader: detailsLoader,
        shouldRevalidate: ({ currentParams, nextParams }) => {
          return JSON.stringify(currentParams) !== JSON.stringify(nextParams);
        },
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default mainRoutes;
