import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import FetchFailed from './components/main/FetchFailed';
import NotFound from './components/main/NotFound';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products, { loader as productsLoader } from './pages/Products';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
        errorElement: <FetchFailed />,
        loader: productsLoader,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
