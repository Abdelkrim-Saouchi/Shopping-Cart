import { useContext } from 'react';
import { HeaderContext } from './HeaderContext';
import cartIcon from '../assets/cart-4-svgrepo-com.svg';

const CartIcon = () => {
  const { productsNumber, toggleCart } = useContext(HeaderContext);

  return (
    <div
      className="cart-icon-wrapper"
      data-testid="cart-icon-wrapper"
      onClick={toggleCart}
    >
      <img src={cartIcon} alt="cart icon" data-testid="cart-icon" />
      {productsNumber > 0 ? (
        <span className="products-counter" data-testid="products-counter">
          {productsNumber}
        </span>
      ) : null}
    </div>
  );
};

export default CartIcon;
