import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Contact from './main/Contact';
import FetchFailed from './main/FetchFailed';
import Home from './main/Home';
import NotFound from './main/NotFound';
import Products, { loader as productsLoader } from './main/Products';

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
