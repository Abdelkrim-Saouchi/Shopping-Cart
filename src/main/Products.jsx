import { useEffect, useState } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const Products = () => {
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
        navigate('/error');
        console.log(error);
      });
  }, []);

  return (
    <main className="container">
      <div className="cards-container">
        {products.map((product) => (
          <Card
            key={product.id}
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
