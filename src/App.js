import { useEffect, useState } from 'react';
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
import { HeaderContext } from './header/HeaderContext';

function App() {
  const [showed, setShowed] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [productsNumber, setProductsNumber] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setProductsNumber(cartList.length);
  }, [cartList, productsNumber]);

  const toggleCart = () => {
    setShowed(!showed);
  };

  const addProductToCart = (id, name, img, price, quantity) => {
    setCartList([...cartList, { id, name, img, price, quantity }]);
  };

  const deleteProductFromCart = (id) => {
    const newCartList = cartList.filter((item) => item.id !== id);
    setCartList(newCartList);
  };

  const calculateTotal = () => {
    const prices = cartList.map((item) => item.price * item.quantity);
    if (prices.length < 1) return setTotal(0);
    const sum = prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    setTotal(sum);
  };

  return (
    <div className="App">
      <HeaderContext.Provider value={{ productsNumber, toggleCart }}>
        <Header />
      </HeaderContext.Provider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              addProductToCart={addProductToCart}
              deleteProductFromCart={deleteProductFromCart}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fetch-error" element={<FetchFailed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showed && (
        <Cart
          toggleCart={toggleCart}
          cartList={cartList}
          deleteProductFromCart={deleteProductFromCart}
          total={total}
          calculateTotal={calculateTotal}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
