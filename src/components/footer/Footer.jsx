import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={'container ' + styles.footer}>
      Copyright &#169;
      <a
        href="https://github.com/Abdelkrim-Saouchi"
        aria-label="Go to developer's github profile"
      >
        Krimothiazine
      </a>
    </footer>
  );
};

export default Footer;
