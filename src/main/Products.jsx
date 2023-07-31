import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import styles from './Products.module.css';
import { getProducts } from './getProducts';

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
            imgSrc={product.images[0]}
            productName={product.title}
            price={product.price}
          />
        ))}
      </div>
    </main>
  );
};

export default Products;
