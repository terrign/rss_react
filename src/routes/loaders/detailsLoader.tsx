import { LoaderFunction } from 'react-router-dom';
import api from '../../api/ApiClient';

export interface SearchParams {
  shipId: string;
}

const detailsLoader: LoaderFunction = async ({ params }) => {
  const { shipId } = params;
  return api.getShipById(shipId as string);
};

export default detailsLoader;
