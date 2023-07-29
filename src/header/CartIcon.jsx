import { useContext } from 'react';
import cartIcon from '../assets/cart-4-svgrepo-com.svg';
import styles from './CartIcon.module.css';
import { HeaderContext } from './HeaderContext';

const CartIcon = () => {
  const { productsNumber, toggleCart } = useContext(HeaderContext);

  return (
    <div
      className={styles.cartIconWrapper}
      data-testid="cart-icon-wrapper"
      onClick={toggleCart}
    >
      <img src={cartIcon} alt="cart icon" data-testid="cart-icon" />
      {productsNumber > 0 ? (
        <span className={styles.productsCounter} data-testid="products-counter">
          {productsNumber}
        </span>
      ) : null}
    </div>
  );
};

export default CartIcon;
