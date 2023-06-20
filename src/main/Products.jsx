import { useEffect, useState } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const Products = ({ incrementProductsNumber, decrementProductsNumber }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => {
        console.log(json.products);
        const selectedProducts = json.products.slice(0, 20);
        setProducts(selectedProducts);
      })
      .catch((error) => {
        navigate('/fetch-error');
        console.log(error);
      });
  }, [navigate]);

  return (
    <main className="container">
      <div className="cards-container">
        {products.map((product) => (
          <Card
            key={product.id}
            imgSrc={product.images[0]}
            productName={product.title}
            price={product.price}
            incrementProductsNumber={incrementProductsNumber}
            decrementProductsNumber={decrementProductsNumber}
          />
        ))}
      </div>
    </main>
  );
};

export default Products;
