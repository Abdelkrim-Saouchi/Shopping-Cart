import cartIcon from '../assets/cart-4-svgrepo-com.svg';

const Header = () => {
  return (
    <header className="container">
      <h1>FutureStore</h1>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <img src={cartIcon} alt="cart icon" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
