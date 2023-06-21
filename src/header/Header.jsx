import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
const Header = ({ productsNumber, toggleCart }) => {
  return (
    <header className="container">
      <h1>FutureStore</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <CartIcon productsNumber={productsNumber} toggleCart={toggleCart} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
