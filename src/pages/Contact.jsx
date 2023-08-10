import fbIcon from '../assets/facebook.png';
import githubIcon from '../assets/github.png';
import twitterIcon from '../assets/twitter.png';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <main className={'container ' + styles.contacts}>
      <div className={styles.socialLinks}>
        <a href="https://www.facebook.com/">
          <img src={fbIcon} alt="facebook" />
        </a>
        <a href="https://twitter.com/">
          <img src={twitterIcon} alt="twitter" />
        </a>
        <a href="https://github.com/">
          <img src={githubIcon} alt="github" />
        </a>
      </div>
      <div>
        <h3>1044 Street, Bordj Bou Arreridj. Algeria</h3>
      </div>
    </main>
  );
};

export default Contact;
