import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import { HeaderContext } from './header/HeaderContext';
import Cart from './main/Cart';
import { ProductsContext } from './main/ProductsContext';

const Layout = () => {
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
    <>
      <HeaderContext.Provider value={{ productsNumber, toggleCart }}>
        <Header />
      </HeaderContext.Provider>
      <ProductsContext.Provider
        value={{ addProductToCart, deleteProductFromCart }}
      >
        <Outlet />
      </ProductsContext.Provider>
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
    </>
  );
};

export default Layout;
