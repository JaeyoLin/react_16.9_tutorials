import React, { useReducer } from 'react';

import ContextStore from './store';
import Reducer from './reducer';
import Products from './components/Products';
import Orders from './components/Orders';

const RootApp = () => {
  const [pState, pDispatch] = useReducer(Reducer.productsReducer, { products: [], });
  const [oState, oDispatch] = useReducer(Reducer.ordersReducer, { orders: [], });

  return (
    <ContextStore.Provider
      value={{
        orders: oState.orders,
        products: pState.products,
        pDispatch,
        oDispatch,
      }}
    >
      <GlobalStateManager />
    </ContextStore.Provider>
  )
}

const GlobalStateManager = () => {
  return (
    <div>
      <Products />
      <Orders />
    </div>
  );
}

export default RootApp;
