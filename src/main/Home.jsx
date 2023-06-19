// https://www.freepik.com/free-photo/cheerful-satisfied-customer-holding-shopping-bags_8132438.htm
import heroImg from '../assets/cheerful-satisfied-customer-holding-shopping-bags.jpg';

const Home = () => {
  return (
    <main className="Home container">
      <div className="hero-section-text">
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
        <button>Explore Now</button>
      </div>
      <img src={heroImg} alt="hero section img" />
    </main>
  );
};

export default Home;
