import fbIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import githubIcon from '../assets/github.png';

const Contact = () => {
  return (
    <main className="contacts container">
      <div className="social-links">
        <a href="https://www.facebook.com/">
          <img src={fbIcon} alt="facebook icon" />
        </a>
        <a href="https://twitter.com/">
          <img src={twitterIcon} alt="twitter icon" />
        </a>
        <a href="https://github.com/">
          <img src={githubIcon} alt="github icon" />
        </a>
      </div>
      <div className="address">
        <h3>1044 Street, Bordj Bou Arreridj. Algeria</h3>
      </div>
    </main>
  );
};

export default Contact;
