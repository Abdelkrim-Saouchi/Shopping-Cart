import { createContext } from 'react';

export const HeaderContext = createContext({
  productsNumber: 1,
  toggleCart: null,
});
