import { useState } from 'react';

const Card = ({ imgSrc, productName, price }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(quantity - 1);
  };

  const changeQuantity = (e) => {
    const quantity = Number(e.target.value);
    setQuantity(quantity);
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
      <button>Add to Cart</button>
    </div>
  );
};

export default Card;
