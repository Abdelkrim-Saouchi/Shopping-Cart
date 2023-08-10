import { useContext } from 'react';
import cartIcon from '../../assets/cart-4-svgrepo-com.svg';
import { HeaderContext } from '../../contexts/HeaderContext';
import styles from './CartIcon.module.css';

const CartIcon = () => {
  const { productsNumber, toggleCart } = useContext(HeaderContext);

  return (
    <button
      className={styles.cartIconWrapper}
      data-testid="cart-icon-wrapper"
      aria-label="Open Close Cart"
      onClick={toggleCart}
    >
      <img src={cartIcon} alt="" data-testid="cart-icon" />
      {productsNumber > 0 ? (
        <span className={styles.productsCounter} data-testid="products-counter">
          {productsNumber}
        </span>
      ) : null}
    </button>
  );
};

export default CartIcon;
