import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import HamburgerMenu from './HamburgerMenu';
import styles from './Header.module.css';

const Header = () => {
  const [hidden, setHidden] = useState(true);

  const toggleNavBar = () => {
    setHidden((prev) => !prev);
  };

  return (
    <header className={'container ' + styles.header}>
      <h1>FutureStore</h1>
      <HamburgerMenu toggleNavBar={toggleNavBar} />
      <nav className={hidden ? '' : styles.show}>
        <button
          className={styles.closeMenu}
          onClick={toggleNavBar}
          aria-label="Close nav Menu"
        >
          X
        </button>
        <ul className={styles.navLinks}>
          <li onClick={toggleNavBar}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleNavBar}>
            <Link to="/products">Products</Link>
          </li>
          <li onClick={toggleNavBar}>
            <Link to="/contact">Contact</Link>
          </li>
          <li onClick={toggleNavBar}>
            <CartIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
