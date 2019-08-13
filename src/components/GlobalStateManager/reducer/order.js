const ordersReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_ORDER':
      return {
        ...state,
        orders: state.orders.concat({ id: state.orders.length }),
      }
    default:
      return state
  }
}

export default ordersReducer;
