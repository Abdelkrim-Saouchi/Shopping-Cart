import { createContext } from 'react';

export const ProductsContext = createContext({
  addProductToCart: null,
  deleteProductFromCart: null,
});
