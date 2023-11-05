import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/Main';
import ErrorPage from '../pages/ErrorPage';
import DetailsPage from '../pages/DetailsPage';
import mainLoader from './loaders/mainLoader';
// import detailsLoader from './loaders/detailsLoader';

const mainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    loader: mainLoader,
    children: [
      {
        path: 'details/:shipId',
        element: <DetailsPage />,
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default mainRoutes;
