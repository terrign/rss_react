import './App.css';
import { RouterProvider } from 'react-router-dom';
import mainRoutes from './routes/mainRoutes';
import Loader from './components/loader/Loader';

const App = () => (
  <div style={{ width: '80%', margin: '0 auto' }}>
    <RouterProvider router={mainRoutes} fallbackElement={<Loader />} />
  </div>
);
export default App;
