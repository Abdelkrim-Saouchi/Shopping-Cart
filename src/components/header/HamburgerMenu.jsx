import styles from './HamburgerMenu.module.css';

const HamburgerMenu = ({ toggleNavBar }) => {
  return (
    <div
      className={styles.hamburger}
      onClick={toggleNavBar}
      onBlur={toggleNavBar}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerMenu;
