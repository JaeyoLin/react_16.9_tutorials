import { createContext } from 'react';

import ordersInitState from './orders';
import productsInitState from './products';

const ContextStore = createContext({
  products: productsInitState,
  orders: ordersInitState,
});

export default ContextStore;
