import { RouteObject, createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/Main';
import ErrorPage from '../pages/ErrorPage';
import mainLoader from './mainLoader';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
    loader: mainLoader,
    errorElement: <ErrorPage />,
  },
];

const mainRoutes = createBrowserRouter(routes);

export default mainRoutes;
