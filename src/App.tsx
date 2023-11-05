import './App.css';
import { RouterProvider } from 'react-router-dom';
import mainRoutes from './routes/mainRoutes';
import Loader from './components/Loader';

const App = () => (
  <div style={{ width: '90%', margin: '0 auto' }}>
    <RouterProvider router={mainRoutes} fallbackElement={<Loader />} />
  </div>
);
export default App;
