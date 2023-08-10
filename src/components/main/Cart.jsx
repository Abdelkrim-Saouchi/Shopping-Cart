import { useEffect } from 'react';
import styles from './Cart.module.css';

const Cart = ({
  toggleCart,
  hidden,
  cartList,
  deleteProductFromCart,
  total,
  calculateTotal,
}) => {
  // calculate total after every render or re-render
  useEffect(() => {
    calculateTotal();
  }, [calculateTotal]);

  const shoppingList = cartList.map((item) => {
    return (
      <li key={item.id}>
        <button
          className={styles.remove}
          onClick={() => deleteProductFromCart(item.id)}
          aria-label="remove product from cart"
        >
          X
        </button>
        <img src={item.img} alt="product" />
        <div className="text">
          <p>{item.name}</p>
          <p>{item.price} $</p>
          <p>Q: {item.quantity}</p>
        </div>
      </li>
    );
  });

  return (
    <aside
      className={
        hidden ? styles.shoppingCart + ' ' + styles.hidden : styles.shoppingCart
      }
    >
      <h2>Your Shopping Cart</h2>
      {cartList.length > 0 ? (
        <ul className={styles.shoppingList}>{shoppingList}</ul>
      ) : (
        <p className={styles.empty}>Cart is empty</p>
      )}

      <p>Total: {total} $</p>
      <button>Checkout</button>
      <button onClick={toggleCart}>Close Cart</button>
    </aside>
  );
};

export default Cart;
