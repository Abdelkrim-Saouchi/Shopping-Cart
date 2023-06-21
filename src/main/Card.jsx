import { useState } from 'react';

const Card = ({
  id,
  imgSrc,
  productName,
  price,
  addProductToCart,
  deleteProductFromCart,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [added, setAdded] = useState(false);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const changeQuantity = (e) => {
    const quantity = Number(e.target.value);
    if (!isNaN(quantity)) setQuantity(quantity);
  };

  return (
    <div className="card">
      <img src={imgSrc} alt="product img" />
      <div className="text">
        <h3>{productName}</h3>
        <p>{price}$</p>
      </div>
      <div className="quantity">
        <button className="decrement" onClick={decrementQuantity}>
          -
        </button>
        <input
          type="text"
          id="product_quantity"
          value={quantity}
          onChange={changeQuantity}
        />
        <button className="increment" onClick={incrementQuantity}>
          +
        </button>
      </div>
      {quantity > 0 ? (
        <button
          onClick={() => {
            if (added) {
              setAdded(false);
              deleteProductFromCart(id);
            } else {
              setAdded(true);
              addProductToCart(id, productName, imgSrc, price, quantity);
            }
          }}
        >
          {added ? 'Added to Cart' : 'Add to Cart'}
        </button>
      ) : (
        <button
          onClick={() => {
            if (added) {
              setAdded(false);
              deleteProductFromCart(id);
            }
          }}
        >
          {added ? 'Added to Cart' : 'Add to Cart'}
        </button>
      )}
    </div>
  );
};

export default Card;
