import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderContext } from '../contexts/HeaderContext';
import { ProductsContext } from '../contexts/ProductsContext';
import Footer from './footer/Footer';
import Header from './header/Header';
import Cart from './main/Cart';

const Layout = () => {
  const [hidden, setShowed] = useState(true);
  const [cartList, setCartList] = useState([]);
  const [productsNumber, setProductsNumber] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setProductsNumber(cartList.length);
  }, [cartList, productsNumber]);

  const toggleCart = () => {
    setShowed(!hidden);
  };

  const addProductToCart = (id, name, img, price, quantity) => {
    setCartList([...cartList, { id, name, img, price, quantity }]);
  };

  const deleteProductFromCart = (id) => {
    const newCartList = cartList.filter((item) => item.id !== id);
    setCartList(newCartList);
  };

  const calculateTotal = useCallback(() => {
    const prices = cartList.map((item) => item.price * item.quantity);
    if (prices.length < 1) return setTotal(0);
    const sum = prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    setTotal(sum);
  }, [cartList]);

  return (
    <>
      <HeaderContext.Provider value={{ productsNumber, toggleCart }}>
        <Header />
      </HeaderContext.Provider>
      <Cart
        toggleCart={toggleCart}
        hidden={hidden}
        cartList={cartList}
        deleteProductFromCart={deleteProductFromCart}
        total={total}
        calculateTotal={calculateTotal}
      />
      <ProductsContext.Provider
        value={{ addProductToCart, deleteProductFromCart }}
      >
        <Outlet />
      </ProductsContext.Provider>

      <Footer />
    </>
  );
};

export default Layout;
