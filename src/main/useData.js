import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useData = (url) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('runs');
    let ignore = false;
    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          if (!ignore) {
            const selectedProducts = json.products.slice(0, 20);
            setProducts(selectedProducts);
          }
        })
        .catch((error) => {
          navigate('/fetch-error');
          console.log(error);
          ignore = true;
        });
    }
    return () => (ignore = true);
  }, [navigate, url]);

  return products;
};

export { useData };
