import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={'container ' + styles.header}>
      <h1>FutureStore</h1>
      <nav>
        <ul className={styles.navLinks}>
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
            <CartIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
