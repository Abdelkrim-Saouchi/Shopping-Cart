import { useEffect } from 'react';

const Cart = ({
  toggleCart,
  cartList,
  deleteProductFromCart,
  total,
  calculateTotal,
}) => {
  useEffect(() => {
    calculateTotal();
  }, [cartList, total]);

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

  console.log('total:', total);

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {cartList.length > 0 ? (
        <ul className="shopping-list">{shoppingList}</ul>
      ) : (
        <p className="empty">Cart is empty</p>
      )}

      <p>Total: {total} $</p>
      <button>Checkout</button>
      <button onClick={toggleCart}>Close</button>
    </div>
  );
};

export default Cart;
