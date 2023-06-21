const Cart = ({ toggleCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      <p>Cart is empty</p>
      <p>Total: 0.00</p>
      <button>Checkout</button>
      <button onClick={toggleCart}>Close</button>
    </div>
  );
};

export default Cart;
