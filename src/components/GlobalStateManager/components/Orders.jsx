import React, { useContext } from 'react';

import ContextStore from '../store';

const Orders = () => {
  const { orders, oDispatch } = useContext(ContextStore);
  return (
    <div>
      <button onClick={() => oDispatch({type: 'ADD_ORDER'})}>ADD ORDER</button>
      {
        orders.map(order => (<div>PRODUCT - {order.id}</div>))
      }
    </div>
  )
}

export default Orders;