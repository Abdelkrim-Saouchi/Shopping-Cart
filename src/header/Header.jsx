import cartIcon from '../assets/cart-4-svgrepo-com.svg';
import { Link } from 'react-router-dom';

const Header = () => {
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
          <img src={cartIcon} alt="cart icon" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
