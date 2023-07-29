import Card from './Card';
import styles from './Products.module.css';
import { useData } from './useData';

const Products = () => {
  const products = useData('https://dummyjson.com/products');

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
