import cartIcon from '../assets/cart-4-svgrepo-com.svg';

const CartIcon = ({ productsNumber }) => {
  return (
    <div className="cart-icon-wrapper">
      <img src={cartIcon} alt="cart icon" />
      {productsNumber > 0 ? (
        <span className="products-counter">{productsNumber}</span>
      ) : null}
    </div>
  );
};

export default CartIcon;
