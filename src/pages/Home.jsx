// https://www.freepik.com/free-photo/cheerful-satisfied-customer-holding-shopping-bags_8132438.htm
import { Link } from 'react-router-dom';
import heroImg1178 from '../assets/cheerful-satisfied-customer-holding-shopping-bags,w_1178.jpg';
import heroImg1534 from '../assets/cheerful-satisfied-customer-holding-shopping-bags,w_1534.jpg';
import heroImg320 from '../assets/cheerful-satisfied-customer-holding-shopping-bags,w_320.jpg';
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
        <Link to="/products">Explore Now</Link>
      </div>
      <img
        sizes="(max-width: 1534px) 100vw, 1534px"
        srcSet={`${heroImg320} 320w, ${heroImg1178} 1178w, ${heroImg1534} 1534w`}
        src={heroImg1534}
        alt=""
      />
    </main>
  );
};

export default Home;
