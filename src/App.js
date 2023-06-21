import { useState } from 'react';
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Contact from './main/Contact';
import FetchFailed from './main/FetchFailed';
import Home from './main/Home';
import NotFound from './main/NotFound';
import Products from './main/Products';
import { Routes, Route } from 'react-router-dom';
import Cart from './main/Cart';

function App() {
  const [productsNumber, setProductsNumber] = useState(0);
  const [showed, setShowed] = useState(false);

  const incrementProductsNumber = () => setProductsNumber(productsNumber + 1);

  const decrementProductsNumber = () => {
    if (productsNumber > 0) {
      setProductsNumber(productsNumber - 1);
    }
  };

  const toggleCart = () => {
    setShowed(!showed);
  };

  return (
    <div className="App">
      <Header productsNumber={productsNumber} toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              incrementProductsNumber={incrementProductsNumber}
              decrementProductsNumber={decrementProductsNumber}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fetch-error" element={<FetchFailed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showed && <Cart toggleCart={toggleCart} />}
      <Footer />
    </div>
  );
}

export default App;
