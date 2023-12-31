import { useLoaderData } from 'react-router-dom';
import { getProducts } from '../Api/getProducts';
import Card from '../components/main/Card';
import styles from './Products.module.css';

export async function loader() {
  return await getProducts();
}

const Products = () => {
  const products = useLoaderData();

  return (
    <main className={'container ' + styles.main}>
      <div className={styles.cardsContainer}>
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            imgSrc={product.thumbnail}
            productName={product.title}
            price={product.price}
          />
        ))}
      </div>
    </main>
  );
};

export default Products;
