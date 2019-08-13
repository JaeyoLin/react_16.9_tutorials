import React, { useContext } from 'react';

import ContextStore from '../store';

const Products = () => {
  const { products, pDispatch } = useContext(ContextStore);
  return (
    <div>
      <button onClick={() => pDispatch({type: 'ADD_PRODUCT'})}>ADD PRODUCT</button>
      {
        products.map(product => (<div>PRODUCT - {product.id}</div>))
      }
    </div>
  )
}

export default Products;
