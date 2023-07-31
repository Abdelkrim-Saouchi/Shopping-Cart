import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={'container ' + styles.footer}>
      Copyright &#169;
      <a href="https://github.com/Abdelkrim-Saouchi"> Krimothiazine</a>
    </footer>
  );
};

export default Footer;
