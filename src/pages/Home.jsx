// https://www.freepik.com/free-photo/cheerful-satisfied-customer-holding-shopping-bags_8132438.htm
import { Link } from 'react-router-dom';
import heroImg from '../assets/cheerful-satisfied-customer-holding-shopping-bags.jpg';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={'container ' + styles.Home}>
      <div className={styles.heroSectionText}>
        <h2>
          Welcome to FutureStore - Your One-Stop Destination for Fashion and
          Technology!
        </h2>
        <p>
          At FutureStore, we believe that shopping should be a delightful
          experience, and that's why we strive to provide you with the best
          products, exceptional customer service, and a seamless shopping
          experience. Browse our diverse range of products, find what you love,
          and let us take care of the rest.
        </p>
        <button>
          <Link to="/products">Explore Now</Link>
        </button>
      </div>
      <img src={heroImg} alt="hero section img" />
    </main>
  );
};

export default Home;
