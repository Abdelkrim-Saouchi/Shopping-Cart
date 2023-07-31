import styles from './Cart.module.css';

const Cart = ({
  toggleCart,
  cartList,
  deleteProductFromCart,
  total,
  calculateTotal,
}) => {
  // calculate total after every render or re-render
  calculateTotal();

  const shoppingList = cartList.map((item) => {
    return (
      <li key={item.id}>
        <span onClick={() => deleteProductFromCart(item.id)}>X</span>
        <img src={item.img} alt="product img" />
        <div className="text">
          <p>{item.name}</p>
          <p>{item.price} $</p>
          <p>Q: {item.quantity}</p>
        </div>
      </li>
    );
  });

  return (
    <div className={styles.shoppingCart}>
      <h2>Your Shopping Cart</h2>
      {cartList.length > 0 ? (
        <ul className={styles.shoppingList}>{shoppingList}</ul>
      ) : (
        <p className={styles.empty}>Cart is empty</p>
      )}

      <p>Total: {total} $</p>
      <button>Checkout</button>
      <button onClick={toggleCart}>Close</button>
    </div>
  );
};

export default Cart;
