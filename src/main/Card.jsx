const Card = ({ imgSrc, productName, price }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="product img" />
      <div className="text">
        <h3>{productName}</h3>
        <p>{price}$</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Card;
